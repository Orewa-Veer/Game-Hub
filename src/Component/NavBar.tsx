import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "../components/ui/color-mode";
import SearchBar from "./SearchBar";
const NavBar = () => {
  return (
    <>
      <HStack justifyContent={"space-between "} padding={"10px"}>
        <Image src={logo} width={"60px"}></Image>
        <SearchBar />

        <ColorModeButton />
      </HStack>
    </>
  );
};

export default NavBar;
