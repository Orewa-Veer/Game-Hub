import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { type Genre } from "../hooks/useGenre";
import getCroppedImage from "../Services/image-url";
interface Props {
  selectedGenre?: Genre | null;
  setSelectedGenre: (genre: Genre) => void;
}
const GenreList = ({ setSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <List.Root maxWidth={"200px"}>
        {data.map((data) => (
          <ListItem paddingY={1} key={data.id}>
            <HStack>
              <Image
                src={getCroppedImage(data.image_background)}
                rounded={4}
                height={7}
              />
              <Button
                as={Link}
                variant={"ghost"}
                fontWeight={data.id === selectedGenre?.id ? "bold" : "medium"}
                fontSize="md"
                onClick={() => setSelectedGenre(data)}
                maxWidth={"150px"}
                wordBreak={"break-word"}
                whiteSpace={"normal"}
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
