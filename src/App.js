import React, { useContext, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import { Context } from './context/Provider';
import fetchPlanets from './API/StarWarsAPI';
import Filter from './components/Filter';

function App() {
  const allContext = useContext(Context);
  const { setPlanetsAPI } = useContext(Context);

  console.log('CONTEXT CONTENT! ___________________________________________', allContext);

  // DID MOUNT
  useEffect(() => {
    async function fetchData() {
      const response = await fetchPlanets();

      setPlanetsAPI(response);
    }

    fetchData();
  }, []);

  return (
    <>
      <Filter />
      <Table />
    </>
  );
}

export default App;
