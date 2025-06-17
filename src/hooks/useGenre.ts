import useData from "./useData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenre = () => useData<Genre>("/genres");

export default useGenre;
