import useData from "./useData";
import type { Genre } from "./useGenre";
export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
  genres: Genre[];
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlaform: Platforms | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlaform?.id } },
    [selectedGenre?.id, selectedPlaform?.id]
  );

export default useGames;
