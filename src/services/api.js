const getDataApi = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((character) => {
        return {
          name: character.name,
          species: character.species,
          image: character.image,
        };
      });
      return dataClean;
    });
};

export default getDataApi;
