import { useState, useEffect } from 'react';
import getDataApi from '../services/api';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import ls from '../services/local-storage';
import CharacterList from './characters/CharacterList';
import Filters from './filters/Filters';
import '../styles/App.scss';
import CharacterDetail from './characters/CharacterDetail';
import '../styles/App.scss';
import defaultImage from '../images/defaultImage.png';
import Header from './Header';

function App() {
  // VARIABLES DE ESTADO
  const [dataCharacters, setDataCharacters] = useState(
    ls.get('dataCharactersLS', [])
  );
  const [filterName, setFilterName] = useState(ls.get('filterNameLS', ''));
  const [filterHouse, setFilterHouse] = useState('Gryffindor');
  const [filterGender, setFilterGender] = useState('All');
  const [detailURL, setDetailURL] = useState(ls.get('detailURL_LS', {}));

  // ver atributos
  // const allSpecies = [
  //   ...new Set(dataCharacters.map((character) => character.species)),
  // ];
  // console.log(allSpecies);

  // const allGender = [
  //   ...new Set(dataCharacters.map((character) => character.gender)),
  // ];
  // console.log(allGender);

  // const allStatus = [
  //   ...new Set(dataCharacters.map((character) => character.alive)),
  // ];
  // console.log(allStatus);

  // API
  useEffect(() => {
    if (dataCharacters.length === 0) {
      getDataApi().then((dataApi) => {
        ls.set('dataCharactersLS', dataApi);
        setDataCharacters(dataApi);
      });
    }
  }, [dataCharacters]);

  // LOCAL-STORAGE
  useEffect(() => {
    ls.set('filterNameLS', filterName);
    ls.set('detailURL_LS', detailURL);
  }, [filterName, detailURL]);

  // MANEJADORAS  EVENTOS
  const handleFilterByName = (value) => {
    setFilterName(value);
  };
  const handleFilterByHouse = (value) => {
    setFilterHouse(value);
  };
  const handleFilterByGender = (value) => {
    setFilterGender(value);
  };
  const handleDetailURL = (value) => {
    setDetailURL(value);
  };
  // Otras funciones
  const getInputName = () => {
    return filterName;
  };

  const changeImage = (img) => {
    return img === '' ? defaultImage : img;
  };

  // FILTRAR y datos filtrados para pintar
  const charactersFilters = dataCharacters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterHouse === 'Houseless'
        ? character.house === ''
        : character.house === filterHouse;
    })
    .filter((character) => {
      return filterGender === 'All' ? true : character.gender === filterGender;
    });

  // obtener el NAME del usuario  (No hay id)
  // const { pathname } = useLocation();
  // const dataPath = matchPath('/character/:characterName', pathname);

  // const characterName =
  //   dataPath !== null ? dataPath.params.characterName : null;
  // const characterFound = charactersFilters.find((character) => {
  //   return character.name === characterName;
  // });

  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:characterId', pathname);

  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataCharacters.find((character) => {
    return character.id === parseInt(characterId);
  });
  console.log(characterFound);
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  filterName={filterName}
                  handleFilterByName={handleFilterByName}
                  filterHouse={filterHouse}
                  handleFilterByHouse={handleFilterByHouse}
                  filterGender={filterGender}
                  handleFilterByGender={handleFilterByGender}
                  handleDetailURL={handleDetailURL}
                />

                <CharacterList
                  charactersFilters={charactersFilters}
                  getInputName={getInputName()}
                  detailURL={detailURL}
                  handleDetailURL={handleDetailURL}
                  changeImage={changeImage}
                />
              </>
            }
          />
          <Route
            path="/character/:characterId"
            element={
              <CharacterDetail
                characterFound={characterFound}
                changeImage={changeImage}
                detailURL={detailURL}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
