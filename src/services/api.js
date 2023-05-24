const getDataApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters ')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((character, index) => {
        return {
          name: character.name,
          species: character.species,
          image: character.image,
          house: character.house,
          gender: character.gender,
          alternate_names: character.alternate_names,
          alive: character.alive,
          id: index,
        };
      });
      return dataClean;
    });
};

export default getDataApi;
