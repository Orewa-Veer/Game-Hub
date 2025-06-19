import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./Component/GameGrid";
import GenreList from "./Component/GenreList";
import NavBar from "./Component/NavBar";

import Platform from "./Component/Platform";
import type { Platforms } from "./hooks/useGames";
import type { Genre } from "./hooks/useGenre";
import SortSelector from "./Component/SortSelector";
import GameHeading from "./Component/GameHeading";
export interface queryObjects {
  genre: Genre | null;
  platforms: Platforms | null;
  ordering: string;
  search: string;
}

function App() {
  const [query, setQueryParams] = useState<queryObjects>({} as queryObjects);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            setSearchQuery={(search: string) =>
              setQueryParams({ ...query, search })
            }
          />
        </GridItem>

        <GridItem
          area={"aside"}
          paddingX={2}
          display={{ base: "none", lg: "block" }}
        >
          <GenreList
            setSelectedGenre={(genre: Genre) =>
              setQueryParams({ ...query, genre: genre })
            }
            selectedGenre={query.genre}
          />
        </GridItem>

        <GridItem area={"main"}>
          <Box paddingLeft={4}>
            <GameHeading gameQuery={query} />
            <HStack gap={5} marginBottom={5}>
              <Platform
                setSelectedPlatform={(plat: Platforms) =>
                  setQueryParams({ ...query, platforms: plat })
                }
                seletedPlatform={query.platforms}
              />
              <SortSelector
                sortOrder={query.ordering}
                setOrdering={(ordering: string) =>
                  setQueryParams({ ...query, ordering })
                }
              />
            </HStack>
          </Box>
          <GameGrid query={query} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
