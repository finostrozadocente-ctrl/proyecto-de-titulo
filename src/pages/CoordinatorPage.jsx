export default function CoordinatorPage({ goBack }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        Panel del Coordinador de Proyecto de Título
      </h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-xl w-full border">
        <p className="text-gray-700 mb-4">
          Desde este panel, el Coordinador puede administrar fechas, calendarios y notificaciones del Proyecto de Título.
        </p>

        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li> Crear, modificar o eliminar fechas del calendario</li>
          <li> Configurar notificaciones automáticas</li>
          <li> Supervisar entregas de estudiantes y docentes</li>
        </ul>

        <button
          onClick={goBack}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          ← Volver al portal
        </button>
      </div>
    </div>
  );
}
