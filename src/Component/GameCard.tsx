import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CardsBadge from "./CardsBadge";
import getCroppedImage from "../Services/image-url";
interface Prop {
  game: Game;
}
const GameCard = ({ game }: Prop) => {
  return (
    <>
      <Card.Root borderRadius={10} overflow={"hidden"}>
        <Image src={getCroppedImage(game.background_image)} />
        <CardBody>
          <Heading font={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList parent_platforms={game.parent_platforms} />
            <CardsBadge score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card.Root>
    </>
  );
};

export default GameCard;
