import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface FetchGenreResults {
  count: number;
  results: Genre[];
}
const useGenre = () => {
  const [isLoading, setLoading] = useState(false);
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenreResults>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genre, error, isLoading };
};

export default useGenre;
