import { useState, useEffect } from 'react';
import { mockData } from '../mock';

export function useFarmerData(farmerId = 'farmer001', useMock = true) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (useMock) {
        setData(mockData[farmerId]);
      } else {
        const res = await fetch(`/api/farmer/${farmerId}`);
        const json = await res.json();
        setData(json);
      }
    };
    fetchData();
  }, [farmerId, useMock]);

  return data;
}
