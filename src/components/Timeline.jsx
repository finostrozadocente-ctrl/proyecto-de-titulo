import dataPT1 from "../data/events.json";
import dataPT2 from "../data/eventsPT2.json";
import TimelineCard from "./TimelineCard";

import weeksPT1 from "../data/weeksPT1.json";
import weeksPT2 from "../data/weeksPT2.json";

export default function Timeline({ tab, viewMode }) {
  
  const data = tab === "PT1" ? dataPT1 : dataPT2;

  // Agrupar por mes
  const groupByMonth = (items) => {
    const groups = {};
    items.forEach((item) => {
      const match = item.fecha.match(/[A-Za-z]+ 2025/);
      const month = match ? match[0] : "Otros";
      if (!groups[month]) groups[month] = [];
      groups[month].push(item);
    });
    return groups;
  };


  if (viewMode === "mensual") {
    const grouped = groupByMonth(data);

    return (
      <section className="max-w-5xl mx-auto mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          🗓️ Vista Mensual {tab === "PT1" ? "PT I" : "PT II"}
        </h2>
        {Object.keys(grouped).map((month) => (
          <div key={month} className="mb-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-3 border-b border-blue-200 pb-1">
              {month}
            </h3>
            {grouped[month].map((item, i) => (
              <TimelineCard key={i} item={item} />
            ))}
          </div>
        ))}
      </section>
    );
  }


  if (viewMode === "semanal") {
    const weeks = tab === "PT1" ? weeksPT1 : weeksPT2;

    return (
      <section className="max-w-5xl mx-auto mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          📅 Vista Semanal {tab === "PT1" ? "PT I" : "PT II"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {weeks.map((semana, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border border-blue-200 rounded-lg p-4 hover:shadow-md transition"
            >
              <h3 className="text-sm font-semibold text-blue-700 mb-2">
                {semana.semana}
              </h3>
              {semana.tareas.map((tarea, i) => (
                <p key={i} className="text-xs text-gray-700 mb-1">
                  {tarea}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  }


  return (
    <section className="max-w-5xl mx-auto mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        🕒 {tab === "PT1" ? "Cronograma Principal PT I" : "Cronograma Completo PT II"}
      </h2>
      {data.map((item, i) => (
        <TimelineCard key={i} item={item} />
      ))}
    </section>
  );
}
