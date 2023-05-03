
import { useEffect, useState } from "react";
import Character from "./Character";
import { 
    Container,
} from "@chakra-ui/react";

function CharacterList() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const response = await fetch("https://rickandmortyapi.com/api/character");

            const data = await response.json();

            setCharacters(data.results);

        }

        fetchData();
    }, []);

    return (
        <div>
            <Container>
                {characters.map((character) => {
                    return (
                        <div key={character.id}>
                            <Character character={character} />
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default CharacterList;