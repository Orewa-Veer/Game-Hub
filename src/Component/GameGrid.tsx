import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      <div className="">
        {error && <Text>{error}</Text>}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          gap={4}
          paddingX={10}
          paddingY={5}
        >
          {games.map((game) => (
            <GameCard game={game} />
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default GameGrid;
