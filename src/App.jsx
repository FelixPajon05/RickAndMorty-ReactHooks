/* eslint-disable react/no-unknown-property */

import CharacterList from "./components/CharacterList";
import { 
  Box,
  Grid,
  GridItem
} from "@chakra-ui/react"

function App() {

  return <div>

    <Box bgImage="url(./assets/img/RickAndMortyBackground.gif)">

      <h1>Rick and Morty App</h1>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem>
          <CharacterList />
        </GridItem>
      </Grid>
    
    </Box>


  </div>;

}

export default App