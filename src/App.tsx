import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Component/NavBar";
import GameGrid from "./Component/GameGrid";
import GenreList from "./Component/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem area={"aside"} display={{ base: "none", lg: "block" }}>
          <GenreList />
        </GridItem>

        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
