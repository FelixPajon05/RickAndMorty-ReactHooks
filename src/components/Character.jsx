/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Character({ character }) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body d-flex justify-content-center">
                    <img src={character.image} alt="" />
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <Link to={`/seeMore/${character.id}`}>
                        <h5 className="card-title">{character.name}</h5>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Character;