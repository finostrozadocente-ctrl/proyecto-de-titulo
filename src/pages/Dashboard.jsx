import { useState, useEffect } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import CalendarInfo from "../components/CalendarInfo";
import Timeline from "../components/Timeline";
import CoordinatorPage from "./CoordinatorPage";

// Importar datos de tareas
import dataPT1 from "../data/events.json";
import dataPT2 from "../data/eventsPT2.json";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("PT1");
  const [isCoordinator, setIsCoordinator] = useState(false);
  const [viewMode, setViewMode] = useState("cronograma");
  const [alerta, setAlerta] = useState(null); 


  const verificarTareasProximas = () => {
    const hoy = new Date();
    const tareas = activeTab === "PT1" ? dataPT1 : dataPT2;
    let proxima = null;

    tareas.forEach((item) => {
      const match = item.fecha.match(/(\d{1,2})\s([A-Za-zñÑ]+)\s(\d{4})/);
      if (!match) return;

      const [_, dia, mesTexto, anio] = match;
      const meses = {
        enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
        julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11,
        ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5, jul: 6, ago: 7,
        sep: 8, oct: 9, nov: 10, dic: 11
      };
      const mes = meses[mesTexto.toLowerCase()];
      if (mes === undefined) return;

      const fechaTarea = new Date(anio, mes, dia);
      const diffMs = fechaTarea - hoy;
      const diffHoras = diffMs / (1000 * 60 * 60);

      if (diffHoras > 0 && diffHoras <= 24) {
        proxima = item;
      }
    });

    setAlerta(proxima);
  };


  useEffect(() => {
    verificarTareasProximas();
    const intervalo = setInterval(verificarTareasProximas, 1000 * 60 * 60); // cada hora
    return () => clearInterval(intervalo);
  }, [activeTab]);

  if (isCoordinator) {
    return <CoordinatorPage goBack={() => setIsCoordinator(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔔 Notificación superior */}
      {alerta && (
        <div className="bg-red-500 text-white text-center py-3 font-semibold shadow-md">
          ⚠️ Recordatorio: {alerta.titulo} • Quedan menos de 24 horas
        </div>
      )}

      <Header setIsCoordinator={setIsCoordinator} />
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <CalendarInfo tab={activeTab} />
      <Timeline tab={activeTab} viewMode={viewMode} />
    </div>
  );
}
