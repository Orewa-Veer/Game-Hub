import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "../components/ui/color-mode";
const NavBar = () => {
  return (
    <>
      <HStack justifyContent={"space-between "} padding={"10px"}>
        <Image src={logo} width={"60px"}></Image>

        <ColorModeButton />
      </HStack>
    </>
  );
};

export default NavBar;
