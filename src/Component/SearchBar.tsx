import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  setSearchQuery: (search: string) => void;
}
const SearchBar = ({ setSearchQuery }: Props) => {
  const Ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(data) => {
          data.preventDefault();
          setSearchQuery(Ref.current?.value || "");
        }}
      >
        <InputGroup startElement={<BsSearch />}>
          <Input
            ref={Ref}
            placeholder="Seach Games"
            borderRadius={20}
            variant={"subtle"}
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchBar;
