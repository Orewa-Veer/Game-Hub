import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import type { Platforms } from "../hooks/useGames";
interface Props {
  setSelectedPlatform: (plat: Platforms) => void;
  seletedPlatform: Platforms | null;
}

const Platform = ({ setSelectedPlatform, seletedPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild marginBottom={1}>
        <Button variant={"subtle"}>
          {seletedPlatform ? seletedPlatform.name : "Platform"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup>
            {data.map((data) => (
              <Menu.Item
                key={data.name}
                value={data.name}
                onClick={() => {
                  setSelectedPlatform(data);
                }}
              >
                {data.name}
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default Platform;
