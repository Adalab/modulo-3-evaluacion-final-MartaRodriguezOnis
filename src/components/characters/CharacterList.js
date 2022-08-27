import CharacterCard from './CharacterCard';
import '../../styles/CharacterList.scss';

const CharacterList = (props) => {
  const renderCharacters = () => {
    if (props.charactersFilters.length > 0) {
      return props.charactersFilters.map((character, index) => {
        return <CharacterCard character={character} key={index} />;
      });
    } else {
      return (
        <section className="notName-message">
          No hay ningún personaje que coincida con la palabra:
          <p className="notName-message__input"> {props.getInputName}</p>
        </section>
      );
    }
  };
  return (
    <section>
      <ul className="character-list">{renderCharacters()}</ul>
    </section>
  );
};

export default CharacterList;
