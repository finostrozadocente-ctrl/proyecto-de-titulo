export default function CalendarInfo() {
  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white shadow rounded-lg border border-gray-200">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-t-lg px-6 py-3">
        <h2 className="text-lg font-semibold">
          📅 Calendario de Actividades – Semestre 2025-2
        </h2>
      </div>
      <div className="px-6 py-4 text-gray-700">
        <p>
          Inicio del semestre:{" "}
          <span className="font-medium text-blue-700">18 de agosto de 2025</span>
        </p>
        <p>
          Cierre de actas:{" "}
          <span className="font-medium text-blue-700">24 de diciembre de 2025</span>
        </p>
      </div>
    </div>
  );
}
