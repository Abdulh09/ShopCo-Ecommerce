import { useEffect, useState } from "react";
import { client } from "./sanityClient";

export function useSanityData(query, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(query, params)
      .then(setData)
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, JSON.stringify(params)]);

  return { data, loading };
}