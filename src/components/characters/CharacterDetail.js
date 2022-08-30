import { Link } from 'react-router-dom';
import HouseGryffindor from '../../images/HouseGryffindor.jpg';
import HouseSlytherin from '../../images/HouseSlytherin.jpg';
import HouseRavenclaw from '../../images/HouseRavenclaw.jpg';
import HouseHufflepuff from '../../images/HouseHufflepuff.jpg';
import Houseless from '../../images/Houseless.jpg';
import '../../styles/CharacterDetail.scss';
import PropTypes from 'prop-types';
import defaultImage from '../../images/defaultImage.png';

const CharacterDetail = (props) => {
  const getHouse = (value) => {
    if (value === 'Gryffindor') {
      return HouseGryffindor;
    } else if (value === 'Slytherin') {
      return HouseSlytherin;
    } else if (value === 'Hufflepuff') {
      return HouseHufflepuff;
    } else if (value === 'Ravenclaw') {
      return HouseRavenclaw;
    } else {
      return Houseless;
    }
  };

  const deadOrAlive = (value) => {
    if (value === true) {
      return (
        <span>
          Vivo <i className="fa-solid fa-heart-circle-check"></i>
        </span>
      );
    } else {
      return (
        <span>
          Muerto <i className="fa-solid fa-skull-crossbones"></i>
        </span>
      );
    }
  };

  const translateSpecies = (specie) => {
    if (specie === 'human') {
      return 'Humano';
    } else if (specie === 'half-giant') {
      return 'Medio gigante';
    } else if (specie === 'werewolf') {
      return 'Hombre lobo';
    } else if (specie === 'cat') {
      return 'Gato';
    } else if (specie === 'goblin') {
      return 'Goblin';
    } else if (specie === 'owl') {
      return 'Lechuza';
    } else if (specie === 'ghost') {
      return 'Fantasma';
    } else if (specie === 'poltergeist') {
      return 'Poltergeist';
    } else if (specie === 'three-headed dog') {
      return 'Perro de tres cabezas';
    } else if (specie === 'dragon') {
      return 'Dragon';
    } else if (specie === 'centaur') {
      return 'Centauro';
    } else if (specie === 'house-elf') {
      return 'Elfo Doméstico';
    } else if (specie === 'acromantula') {
      return 'Acromántula';
    } else if (specie === 'hippogriff') {
      return 'Hipogrifo';
    } else if (specie === 'giant') {
      return 'Gigante';
    } else if (specie === 'vampire') {
      return 'Vampiro';
    } else if (specie === 'half-human') {
      return 'Semihumano';
    }
  };
  return props.characterFound === undefined ? (
    <>
      <p className="characterNot-found">El personaje que buscas no existe</p>
      <Link to="/" className="SectionDetail-link">
        Volver
      </Link>
    </>
  ) : (
    <>
      <Link to="/" className="SectionDetail-link">
        Volver
      </Link>
      <section
        className={`detailSection section-${props.characterFound.house}`}
      >
        <img
          className="detailSection__img"
          src={props.changeImage(props.characterFound.image)}
          alt={`Foto de ${props.characterFound.name}`}
          title={`Foto de ${props.characterFound.name}`}
        ></img>

        <div className="detailSection__cont">
          <h4 className="detailSection__name">{props.characterFound.name}</h4>
          <p className="detailSection__paragraph">
            Estatus: {deadOrAlive(props.characterFound.alive)}
          </p>
          <p className="detailSection__paragraph">
            Especie: {translateSpecies(props.characterFound.species)}
          </p>
          <p className="detailSection__paragraph">
            {`Género: ${
              props.characterFound.gender === 'female' ? 'Mujer' : 'Hombre'
            }`}
          </p>
          <p className="detailSection__paragraph">
            {`Otros nombres: ${props.characterFound.alternate_names}`}
          </p>
          <p className="detailSection__paragraph">
            {`Casa: ${
              props.characterFound.house === ''
                ? 'Sin Casa'
                : props.characterFound.house
            }`}
          </p>
          <img
            className="detailSection__house"
            src={getHouse(props.characterFound.house)}
            alt={`Foto de ${props.characterFound.house}`}
            title={`Foto de ${props.characterFound.house}`}
          ></img>
        </div>
      </section>
    </>
  );
};
CharacterDetail.defaultProps = {
  charactersFound: {
    name: '',
    species: '',
    house: '',
    gender: '',
    alive: '',
    image: { defaultImage },
    id: '',
    alternate_names: '',
  },
};
CharacterDetail.propTypes = {
  charactersFound: PropTypes.object,
  getHouse: PropTypes.func,
};
export default CharacterDetail;
