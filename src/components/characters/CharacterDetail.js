import { Link } from 'react-router-dom';
import defaultImage from '../../images/defaultImage.png';
import HouseGryffindor from '../../images/HouseGryffindor.jpg';
import HouseSlytherin from '../../images/HouseSlytherin.jpg';
import HouseRavenclaw from '../../images/HouseRavenclaw.jpg';
import HouseHufflepuff from '../../images/HouseHufflepuff.jpg';
import '../../styles/CharacterDetail.scss';

const CharacterDetail = (props) => {
  // window.location.href = `${props.detailURL.href}`;
  console.log(props.detailURL.href);
  const getHouse = (value) => {
    if (value === 'Gryffindor') {
      return HouseGryffindor;
    } else if (value === 'Slytherin') {
      return HouseSlytherin;
    } else if (value === 'Hufflepuff') {
      return HouseHufflepuff;
    } else if (value === 'Ravenclaw') {
      return HouseRavenclaw;
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

  const changeImage = (img) => {
    return img === '' ? defaultImage : props.characterFound.image;
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
  return (
    <>
      <Link to="/">Volver</Link>
      <section className={`section-${props.characterFound.house}`}>
        <div className="detailSection__contImg">
          <img
            className="detailSection-img"
            src={changeImage(props.characterFound.image)}
            alt={`Foto de ${props.characterFound.name}`}
            title={`Foto de ${props.characterFound.name}`}
          ></img>
        </div>
        <h4 className="detailSection__name">{props.characterFound.name}</h4>
        <p className="detailSection__paragraph">
          Estatus:{deadOrAlive(props.characterFound.alive)}
        </p>
        <p className="detailSection__paragraph">
          Especie:{translateSpecies(props.characterFound.species)}
        </p>
        <p className="detailSection__paragraph">
          {`Género:${
            props.characterFound.gender === 'female' ? 'Mujer' : 'Hombre'
          }`}
        </p>
        <p className="detailSection__paragraph">
          Casa:{`${props.characterFound.house}`}
        </p>
        <img
          className="detailSection__house"
          src={getHouse(props.characterFound.house)}
          alt={`Foto de ${props.characterFound.house}`}
          title={`Foto de ${props.characterFound.house}`}
        ></img>
      </section>
      ;
    </>
  );
};
export default CharacterDetail;
