import React from 'react';

const herbs = [
  {
    name: 'Ashwagandha',
    season: 'Oct–Feb',
    idealMoisture: '<10%',
    dryingMethod: 'Shade drying on mesh racks',
    labTests: ['Alkaloid content', 'Moisture %', 'Root integrity'],
    marketUse: 'Stress relief, immunity boosters',
    culturalNote: 'Known as “Indian Ginseng” in Ayurveda',
  },
  {
    name: 'Brahmi',
    season: 'Jul–Oct',
    idealMoisture: '<12%',
    dryingMethod: 'Sun drying with turning every 6 hrs',
    labTests: ['Bacoside level', 'Leaf purity', 'Microbial load'],
    marketUse: 'Memory tonics, neuro supplements',
    culturalNote: 'Used in ancient Vedic rituals for clarity',
  },
  {
    name: 'Shankhpushpi',
    season: 'Aug–Nov',
    idealMoisture: '<11%',
    dryingMethod: 'Low-heat dehydration (below 40°C)',
    labTests: ['Flavonoid profile', 'Color retention', 'Residue analysis'],
    marketUse: 'Cognitive enhancers, child tonics',
    culturalNote: 'Traditionally offered during Saraswati Puja',
  }
];
export default function HerbInfo() {
  return (
    <section className="p-4">
      <h2 className="text-green-900 text-xl font-semibold mb-4">📚 Herb Intelligence</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {herbs.map((herb, idx) => (
          <div key={idx} className="bg-white border border-green-200 rounded-lg shadow p-4">
            <h3 className="text-green-800 font-bold text-lg mb-2">{herb.name}</h3>
            <ul className="text-green-700 space-y-1">
              <li><strong>Harvest Season:</strong> {herb.season}</li>
              <li><strong>Ideal Moisture:</strong> {herb.idealMoisture}</li>
              <li><strong>Drying Method:</strong> {herb.dryingMethod}</li>
              <li><strong>Lab Parameters:</strong> {herb.labTests.join(', ')}</li>
              <li><strong>Market Use:</strong> {herb.marketUse}</li>
              <li><strong>Cultural Note:</strong> {herb.culturalNote}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
