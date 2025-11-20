export default function Header({ setIsCoordinator }) {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-center py-6 shadow">
      <h1 className="text-2xl font-semibold">
        Portal de Información Proyecto de Título UCEN
      </h1>
      <p className="text-sm opacity-90 mt-1">
        Consulta fechas y procesos importantes para tu proyecto de título
      </p>
      <button
        onClick={() => setIsCoordinator(true)}
        className="mt-3 bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50"
      >
        Acceso Coordinador
      </button>
    </header>
  );
}
