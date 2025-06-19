import { Button, Menu, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  setOrdering: (order: string) => void;
  sortOrder: string;
}

const SortSelector = ({ setOrdering, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const curerntSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu.Root>
      <Menu.Trigger asChild marginBottom={1}>
        <Button variant={"subtle"}>
          Sort by: {curerntSortOrder ? curerntSortOrder.label : "Relevance"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup>
            {sortOrders.map((order) => (
              <MenuItem
                value={order.value}
                key={order.value}
                onClick={() => setOrdering(order.value)}
              >
                {order.label}
              </MenuItem>
            ))}
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
