import CharacterCard from './CharacterCard';
import '../../styles/CharacterList.scss';
import wand from '../../images/wand.png';

const CharacterList = (props) => {
  const renderCharacters = () => {
    if (props.charactersFilters.length > 0) {
      return props.charactersFilters
        .sort((aName, bName) => {
          if (aName.name.toLowerCase() < bName.name.toLowerCase()) {
            return -1;
          }
          if (aName.name.toLowerCase() > bName.name.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .map((character, index) => {
          return (
            <CharacterCard
              character={character}
              key={index}
              detailURL={props.detailURL}
              handleDetailURL={props.handleDetailURL}
              changeImage={props.changeImage}
            />
          );
        });
    } else {
      return (
        <section className="notName-message">
          No hay ningún personaje que coincida con:
          <p className="notName-message__input"> {props.getInputName}</p>
        </section>
      );
    }
  };
  return (
    <section>
      <>
        <img
          className="section-img"
          src={wand}
          alt="Icono varita mágica"
          title="Icono varita mágica"
        ></img>
        <p className="paragraph-section">¡¡ACCIO PERSONAJES!!</p>
        <ul className="character-list">{renderCharacters()}</ul>
      </>
    </section>
  );
};

export default CharacterList;
