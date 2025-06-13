import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
interface Prop {
  game: Game;
}
const GameCard = ({ game }: Prop) => {
  return (
    <>
      <Card.Root borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading font={"2xl"}>{game.name}</Heading>
          <PlatformIconList parent_platforms={game.parent_platforms} />
        </CardBody>
      </Card.Root>
    </>
  );
};

export default GameCard;
