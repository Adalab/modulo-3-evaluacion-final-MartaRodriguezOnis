import CharacterCard from './CharacterCard';
import '../../styles/CharacterList.scss';

const CharacterList = (props) => {
  const renderCharacters = props.dataCharacters.map((character, index) => {
    return <CharacterCard character={character} key={index} />;
  });
  return (
    <section>
      <ul className="character-list">{renderCharacters}</ul>
    </section>
  );
};

export default CharacterList;
