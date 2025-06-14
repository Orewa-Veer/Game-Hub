import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div className="">
        {error && <Text>{error}</Text>}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          gap={4}
          paddingX={5}
          paddingY={5}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer>
                {" "}
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {games.map((game) => (
            <GameCardContainer>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default GameGrid;
