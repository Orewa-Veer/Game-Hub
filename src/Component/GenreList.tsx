import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../Services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <List.Root>
        {data.map((data) => (
          <ListItem paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImage(data.image_background)}
                rounded={4}
                height={7}
              />
              <Text fontSize="lg">{data.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
