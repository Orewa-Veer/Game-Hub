import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "../components/ui/color-mode";
import SearchBar from "./SearchBar";
interface Props {
  setSearchQuery: (search: string) => void;
}
const NavBar = ({ setSearchQuery }: Props) => {
  return (
    <>
      <HStack padding={"10px"}>
        <Image src={logo} width={"60px"}></Image>
        <SearchBar
          setSearchQuery={(search: string) => setSearchQuery(search)}
        />

        <ColorModeButton />
      </HStack>
    </>
  );
};

export default NavBar;
