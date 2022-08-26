import { useState, useEffect } from 'react';
import '../styles/App.scss';
import getDataApi from '../services/api';
// import { Link, Route, Routes } from 'react-router-dom';
import CharacterList from './characters/CharacterList';
import defaultImage from '../images/defaultImage.png';

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);

  useEffect(() => {
    getDataApi().then((dataApi) => {
      if ((dataApi.image = '')) {
        dataApi.image = { defaultImage };
      }
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
