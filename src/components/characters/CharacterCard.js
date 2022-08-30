import '../../styles/CharacterCard.scss';
import { Link } from 'react-router-dom';
import defaultImage from '../../images/defaultImage.png';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  const handleLink = (ev) => {
    props.handleDetailURL(window.location);
  };

  return (
    <li className="character-item" id={props.character.id}>
      <Link
        to={`character/${props.character.id}`}
        className="character-link"
        onClick={handleLink}
      >
        <img
          className={`character-item__img character-item__${props.character.house}`}
          src={props.changeImage(props.character.image)}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        ></img>

        <h4 className="character-item__name">{props.character.name}</h4>
        <p className="character-item__species">{`${props.character.species}`}</p>
      </Link>
    </li>
  );
};
CharacterCard.defaultProps = {
  charactersFilters: {
    name: '',
    species: '',
    image: { defaultImage },
    house: '',
  },
};
CharacterCard.propTypes = {
  charactersFilters: PropTypes.object,
  changeImage: PropTypes.func,
  getInputName: PropTypes.func,
  handleDetailURL: PropTypes.func,
};
export default CharacterCard;
