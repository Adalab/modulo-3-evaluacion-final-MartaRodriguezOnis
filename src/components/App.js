import { useState, useEffect } from 'react';
import getDataApi from '../services/api';
// import { Link, Route, Routes } from 'react-router-dom';
import ls from '../services/local-storage';
import CharacterList from './characters/CharacterList';
import Filters from './filters/Filters';
import '../styles/App.scss';

function App() {
  // VARIABLES DE ESTADO
  const [dataCharacters, setDataCharacters] = useState([]);

  const [filterName, setFilterName] = useState(ls.get('filterNameLS', ''));

  // API
  useEffect(() => {
    getDataApi().then((dataApi) => {
      setDataCharacters(dataApi);
    });
  }, []);

  // LOCAL-STORAGE
  useEffect(() => {
    ls.set('filterNameLS', filterName);
  }, [filterName]);

  // MANEJADORAS  EVENTOS
  const handleFilterByName = (value) => {
    setFilterName(value);
  };

  // Otras funciones
  const getInputName = () => {
    return filterName;
  };
  // FILTRAR y datos filtrados para pintar
  const charactersFilters = dataCharacters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <header className="header">
        <h1 className="header__title">Harry Potter</h1>
      </header>
      <main>
        <Filters
          filterName={filterName}
          handleFilterByName={handleFilterByName}
        />
        <CharacterList
          charactersFilters={charactersFilters}
          getInputName={getInputName()}
        />
      </main>
    </>
  );
}

export default App;
