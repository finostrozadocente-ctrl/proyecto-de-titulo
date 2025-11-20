export default function Tabs({ activeTab, setActiveTab, viewMode, setViewMode }) {
  return (
    <div className="flex flex-col items-center mt-6 space-y-4">
      {/* Selector de proyecto */}
      <div className="bg-white rounded-xl shadow p-1 flex space-x-2">
        <button
          onClick={() => setActiveTab("PT1")}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            activeTab === "PT1"
              ? "bg-blue-600 text-white shadow"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Proyecto de Título I
        </button>

        <button
          onClick={() => setActiveTab("PT2")}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            activeTab === "PT2"
              ? "bg-blue-600 text-white shadow"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Proyecto de Título II
        </button>
      </div>

      {/* Selector de vista */}
      <div className="flex space-x-3">
        <button
          onClick={() => setViewMode("cronograma")}
          className={`px-4 py-1 rounded-md border ${
            viewMode === "cronograma"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Cronograma
        </button>

        <button
          onClick={() => setViewMode("mensual")}
          className={`px-4 py-1 rounded-md border ${
            viewMode === "mensual"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Vista Mensual
        </button>

        <button
          onClick={() => setViewMode("semanal")}
          className={`px-4 py-1 rounded-md border ${
            viewMode === "semanal"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Vista Semanal
        </button>
      </div>
    </div>
  );
}
