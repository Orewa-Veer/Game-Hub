import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import getCroppedImage from "../Services/image-url";
import CardsBadge from "./CardsBadge";
import PlatformIconList from "./PlatformIconList";
interface Prop {
  game: Game;
}
const GameCard = ({ game }: Prop) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImage(game.background_image)} borderRadius={10} />
      <CardBody>
        <HStack marginBottom={2} justifyContent={"space-between"}>
          <PlatformIconList parent_platforms={game.parent_platforms} />
          <CardsBadge score={game.metacritic || 0} />
        </HStack>
        <Heading font={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
