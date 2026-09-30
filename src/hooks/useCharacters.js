import { useMemo } from "react";
import useFetchData from "./useFetchData";

const API_URL = "https://rickandmortyapi.com/api/character";

export default function useCharacters() {
  const { data, loading, error, refetch } = useFetchData(API_URL);

  const characters = useMemo(() => {
    const results = data && Array.isArray(data.results) ? data.results : [];
    return results.map((item) => ({
      id: String(item.id),
      title: item.name,
      image: item.image,
      description: `${item.status} · ${item.species} · ${item.gender}\nOrigen: ${
        item.origin ? item.origin.name : "Desconocido"
      }\nUbicación: ${item.location ? item.location.name : "Desconocida"}`,
    }));
  }, [data]);

  return { characters, loading, error, refetch };
}
