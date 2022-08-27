import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <>
      <Link to="/">Volver</Link>
      <section className="detailSection">
        <div className="detailSection__contImg">
          <img
            className="detailSection-img"
            src={props.characterFound.image}
            alt={`Foto de ${props.characterFound.name}`}
            title={`Foto de ${props.characterFound.name}`}
          ></img>
        </div>
        <h4 className="detailSection__name">{props.characterFound.name}</h4>
        <p className="detailSection__paragraph">
          Estatus:{`${props.characterFound.alive}`}
        </p>
        <p className="detailSection__paragraph">
          Especie:{`${props.characterFound.species}`}
        </p>
        <p className="detailSection__paragraph">
          Género:{`${props.characterFound.gender}`}
        </p>
        <p className="detailSection__paragraph">
          Casa:{`${props.characterFound.house}`}
        </p>

        {/* // FALTA IMAGEN CASA */}
      </section>
      ;
    </>
  );
};
export default CharacterDetail;
