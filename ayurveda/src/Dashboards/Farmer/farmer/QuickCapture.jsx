import React, { useState } from 'react';

export default function QuickCapture() {
  const [species, setSpecies] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Herb collection recorded successfully!');
  };

  return (
    <section className="p-4">
      <h2 className="text-green-800 text-xl font-semibold mb-4">📷 Quick Capture</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 bg-green-50 p-4 rounded shadow">
        <input
          type="text"
          placeholder="Species (e.g. Ashwagandha)"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="p-2 border rounded"
        />
     <input type="file" accept="image/*" className="p-2" />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          RECORD COLLECTION
        </button>
      </form>
    </section>
  );
}
