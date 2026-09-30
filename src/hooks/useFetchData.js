import { useCallback, useEffect, useState } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(
    async (signal) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`Error ${response.status} al consultar el servicio`);
        }
        const json = await response.json();
        setData(json);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message || "Ocurrió un error inesperado");
        }
      } finally {
        if (!signal || !signal.aborted) {
          setLoading(false);
        }
      }
    },
    [url]
  );

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal);
    return () => controller.abort();
  }, [load]);

  const refetch = useCallback(() => load(), [load]);

  return { data, loading, error, refetch };
}
