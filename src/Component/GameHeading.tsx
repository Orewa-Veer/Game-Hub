import { Heading } from "@chakra-ui/react";
import type { queryObjects } from "../App";
interface Props {
  gameQuery: queryObjects;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platforms ? gameQuery.platforms.name : ""} ${
    gameQuery.genre ? gameQuery.genre.name : ""
  } Games`;
  return (
    <Heading marginY={5} size={"4xl"} fontWeight={"bold"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
