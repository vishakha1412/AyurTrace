 import {useFarmerData} from '../../../hooks/useFarmerData';
const stageIcons = {
  Harvested: '🌾',
  'Lab Testing': '🧪',
  Manufactured: '🏭',
  Market: '🛒'
};

export default function BatchJourney( ) {
  const farmer = useFarmerData('farmer001', true);
  const journey=farmer.batchJourney;
  if (!journey || journey.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold text-green-600">📦 Batch Journey</h2>
        <p className="text-gray-500">No journey data available.</p>
      </div>
    );
  }
  const getStatus = (index, total) => {
    if (index < total - 1) return '✅ Completed';
    if (index === total - 1) return '⏳ In Progress';
    return '❌ Rejected';
  };

  const getDuration = (currentDate, prevDate) => {
    const d1 = new Date(currentDate);
    const d2 = new Date(prevDate);
    const diff = Math.round((d1 - d2) / (1000 * 60 * 60 * 24));
    return diff > 0 ? `${diff} day${diff > 1 ? 's' : ''}` : null;
  };
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold text-green-600 mb-4">📦 Batch Journey Timeline</h2>
      <div className="border-l-4 border-green-400 pl-6 space-y-6 relative">
        {journey.map((step, index) => {
          const prevStep = journey[index - 1];
          const duration = prevStep ? getDuration(step.date, prevStep.date) : null;
          const status = getStatus(index, journey.length);

          return (
            <div
              key={`${step.stage}-${step.date}-${index}`}
              className="relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="absolute -left-8 top-0 text-xl">{stageIcons[step.stage] || '🔸'}</div>
              <div className="bg-green-50 p-3 rounded-lg shadow-sm border border-green-200">
                <div className="font-semibold text-gray-800">{step.stage}</div>
                <div className="text-sm text-gray-600">{step.location}</div>
                <div className="text-xs text-gray-500">{step.date}</div>
                <div className="text-xs text-green-700 mt-1">{status}</div>
                {duration && (
                  <div className="text-xs text-gray-400 italic">⏱️ {duration} since last stage</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

 <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}



