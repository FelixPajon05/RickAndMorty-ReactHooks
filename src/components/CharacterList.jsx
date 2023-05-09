
import { useEffect, useState } from "react";
import Character from "./Character";

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
            <div className="row m-0 px-5">
                {characters.map((character) => {
                    return (
                        <div className="col-sx-12 col-sm-12 col-md-4 col-lg-4 mb-4" key={character.id}>
                            <Character character={character} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CharacterList;