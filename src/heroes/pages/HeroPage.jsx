import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  //console.log(id);
  const hero = useMemo(() => getHeroById(id), [id]); // el use memo dispara la funcion del callback y se ejecutara cada vez que sus dependencais cambien lo que va a regresar esta funcion es lo que vmos a tener en el hero las dependencias son el id , entonces cuando el id cambie va a ser diferente y se volvewra a diparar la funcion del callback
  //console.log(hero);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-fluid animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {hero.alter_ego}
          </li>

          <li className="list-group-item">
            <b>Publisher: </b> {hero.publisher}
          </li>

          <li className="list-group-item">
            <b>First appearance: </b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-4">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
