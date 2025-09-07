import { useEffect, useState } from "react";

export default function useFetch(fetchFunction) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFunction().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [fetchFunction]);

  return { data, loading };
}

