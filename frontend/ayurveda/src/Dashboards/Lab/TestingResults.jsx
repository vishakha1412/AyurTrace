export default function TestingResults() {
  return (
    <div>
      <h2 className="text-lg font-bold text-green-700 mb-4">Testing Results</h2>
      <table className="w-full border/20 shadow-md ">
        <thead className="bg-green-100  font-serif">
          <tr>
            <th className="p-2">Batch</th>
            <th className="p-2">Herb</th>
            <th className="p-2">Marker</th>
            <th className="p-2">Method</th>
            <th className="p-2">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t font-serif">
            <td className="p-2">123</td>
            <td className="p-2">Ashwagandha</td>
            <td className="p-2">Withanolides</td>
            <td className="p-2">HPLC</td>
            <td className="p-2">Pass</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="border-t font-serif ">
            <td className="p-2">12345</td>
            <td className="p-2">Neem</td>
            <td className="p-2">Withanolides</td>
            <td className="p-2">HPLC</td>
            <td className="p-2">Fail</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
