import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../Services/image-url";

const GenreList = () => {
  const { genre, isLoading, error } = useGenre();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <List.Root>
        {genre.map((genre) => (
          <ListItem paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                rounded={4}
                height={7}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
