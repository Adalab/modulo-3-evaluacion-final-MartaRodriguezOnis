import { useState, useEffect } from 'react';
import getDataApi from '../services/api';
// import { Link, Route, Routes } from 'react-router-dom';
import CharacterList from './characters/CharacterList';

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);

  useEffect(() => {
    getDataApi().then((dataApi) => {
      setDataCharacters(dataApi);
    });
  }, []);

  return (
    <>
      <h1>Harry Potter</h1>
      <CharacterList dataCharacters={dataCharacters} />
    </>
  );
}

export default App;
