import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <>
      <InputGroup startElement={<BsSearch />}>
        <Input placeholder="Seach Games" borderRadius={20} variant={"subtle"} />
      </InputGroup>
    </>
  );
};

export default SearchBar;
