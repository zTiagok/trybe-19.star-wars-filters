import React, { useContext, useEffect } from 'react';
import './App.css';
import { act } from 'react-dom/test-utils';
import Table from './components/Table';
import { Context } from './context/Provider';
import fetchPlanets from './API/StarWarsAPI';
import Filter from './components/Filter';
import FilterPrompts from './components/FilterPrompts';

function App() {
  const allContext = useContext(Context);
  const { setPlanetsAPI } = useContext(Context);

  console.log('CONTEXT CONTENT! ___________________________________________', allContext);

  // DID MOUNT
  useEffect(() => {
    async function fetchData() {
      const response = await fetchPlanets();

      act(() => {
        setPlanetsAPI(response);
      });
    }

    fetchData();
  }, []);

  return (
    <>
      <Filter />
      <FilterPrompts />
      <Table />
    </>
  );
}

export default App;
