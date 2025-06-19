import type { queryObjects } from "../App";
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

const useGames = (query: queryObjects) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: query.genre?.id,
        parent_platforms: query.platforms?.id,
        ordering: query?.ordering,
        search: query?.search,
      },
    },
    [query]
  );

export default useGames;
