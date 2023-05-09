import "./App.css";
import CharacterList from "./components/CharacterList";

function App() {

  return <div className="bg-main text-white">

      <h1 className="text-center py-4">The Rick and Morty API</h1>

      <CharacterList />

  </div>;

}

export default App;