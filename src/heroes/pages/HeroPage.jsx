import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const {id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById(id), [id]);


  const onNavigateBack = () => {
    navigate(-1);
  }
  /** Validamos que venga un Heroe valido */
  if( !hero ) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-4 mb-3">
      <div className="col-4">
        <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>

      <div className="col-8">
{/*         <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter Ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
          <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p> */}

        <div className="card border-light mb-3" style={{maxWidth: 780 }}>
          <div className="card-header">{hero.superhero}</div>
          <div className="card-body">
            <h5 className="card-title">Dark card title</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter Ego:</b> {hero.alter_ego}</li>
              <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
              <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance}</li>
            </ul>
            <h5 className="mt-3">Characters</h5>
            <p>{hero.characters}</p>

            <button onClick={onNavigateBack} className="btn btn-outline btn-primary">Regresar</button>
          </div>
        </div>
      </div>

    </div>
  )
}
