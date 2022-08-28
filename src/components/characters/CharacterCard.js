import '../../styles/CharacterCard.scss';
import defaultImage from '../../images/defaultImage.png';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  const changeImage = (img) => {
    return img === '' ? defaultImage : props.character.image;
  };
  return (
    <li className="character-item" id={props.character.id}>
      <Link to={`/character/${props.character.id}`}>
        <img
          className="character-item__img"
          src={changeImage(props.character.image)}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        ></img>

        <h4 className="character-item__name">{props.character.name}</h4>
        <p className="character-item__species">{`${props.character.species}`}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
