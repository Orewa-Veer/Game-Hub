import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import type { Platform } from "../hooks/useGames";
interface Prop {
  parent_platforms: { platform: Platform }[];
}
const PlatformIconList = ({ parent_platforms }: Prop) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={1}>
        {parent_platforms.map(({ platform }) => (
          <Icon color={"gray.500"} as={IconMap[platform.slug]} />
        ))}
      </HStack>
    </>
  );
};
export default PlatformIconList;
