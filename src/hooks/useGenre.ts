import genre from "../data/genre";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenre = () => ({ data: genre, error: null, isLoading: false });

export default useGenre;
