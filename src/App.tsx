import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import "./App.css";
import { useColorMode } from "./components/ui/color-mode";

function App() {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode("light"); // forces light mode
  }, []);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"} bg={"coral"}>
          Nav
        </GridItem>

        <GridItem
          area={"aside"}
          bg={"blue"}
          display={{ base: "none", lg: "block" }}
        >
          Aside
        </GridItem>

        <GridItem area={"main"} bg={"red"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
