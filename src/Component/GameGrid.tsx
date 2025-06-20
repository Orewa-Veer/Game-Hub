import { SimpleGrid, Text } from "@chakra-ui/react";
import type { queryObjects } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
interface Props {
  query: queryObjects;
}
const GameGrid = ({ query }: Props) => {
  const { data, error, isLoading } = useGames(query);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div className="">
        {error && <Text>{error}</Text>}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          gap={6}
          paddingX={5}
          paddingY={1}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {data.map((data) => (
            <GameCardContainer key={data.id}>
              <GameCard game={data} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default GameGrid;
