import { useState, useEffect } from "react";

export default function TimelineCard({ item }) {
  
  const calcularTiempo = (fechaTexto) => {
    try {
      
      const match = fechaTexto.match(/(\d{1,2})\s?[-–]?\s?(\d{0,2})?\s?([A-Za-zñÑ]+)\s(\d{4})/);
      if (!match) return "Fecha pasada";

      const [, diaInicio, , mesTexto, anio] = match;
      const meses = {
        enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
        julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11,
        ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5, jul: 6, ago: 7,
        sep: 8, oct: 9, nov: 10, dic: 11
      };

      const mes = meses[mesTexto.toLowerCase()] ?? null;
      if (mes === null) return "Fecha pasada";

      const fechaTarea = new Date(anio, mes, diaInicio);
      const hoy = new Date();

      const diffMs = fechaTarea - hoy;
      const diffHoras = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDias = Math.floor(diffHoras / 24);
      const horasRestantes = diffHoras % 24;

      if (diffMs < 0) return "Fecha pasada";
      return `Faltan ${diffDias} días y ${horasRestantes} horas`;
    } catch {
      return "Fecha pasada";
    }
  };

  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempo(item.fecha));

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempoRestante(calcularTiempo(item.fecha));
    }, 1000 * 60 * 60); // cada hora

    return () => clearInterval(intervalo); 
  }, [item.fecha]);

  
  return (
    <div className={`border-l-4 ${item.color} p-4 rounded-lg shadow-sm mb-4`}>
      {/* Fecha */}
      <div className="text-sm text-gray-500 font-medium">{item.fecha}</div>

      {/* Título */}
      <h3 className="font-semibold text-blue-700">{item.titulo}</h3>

      {/* Responsable */}
      <p className="text-sm text-gray-600 mt-1">
        Responsable: <strong>{item.responsable}</strong>
      </p>

      {/* Descripción */}
      <p className="text-sm mt-2 text-gray-700">{item.descripcion}</p>

      {/* Estado dinámico */}
      <div className="mt-3">
        {tiempoRestante === "Fecha pasada" ? (
          <span className="text-xs inline-block bg-green-100 text-green-700 border border-green-300 px-3 py-1 rounded-full">
            Fecha pasada
          </span>
        ) : (
          <span className="text-xs inline-block bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 rounded-full">
            {tiempoRestante}
          </span>
        )}
      </div>
    </div>
  );
}
