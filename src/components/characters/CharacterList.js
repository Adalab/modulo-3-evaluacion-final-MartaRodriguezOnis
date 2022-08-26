import CharacterCard from './CharacterCard';

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
