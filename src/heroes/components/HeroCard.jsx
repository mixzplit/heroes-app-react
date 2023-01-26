import { Link } from "react-router-dom";

const CharactersByHero = ({alter_ego, characters}) => {
    if(alter_ego === characters) return (<></>);
    return <p>{characters}</p>
}

export const HeroCard = ({ 
    id,superhero,alter_ego,characters,publisher, first_appearance }) => {

    const heroImageUrl = `./assets/heroes/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={heroImageUrl} className="img-fluid rounded-start" alt={superhero} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            <CharactersByHero alter_ego={alter_ego} characters={characters} />
                            <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                            <p className="card-text"><small className="text-muted">{publisher}</small></p>

                            <Link to={`/hero/${id}`}>Mas info...</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
