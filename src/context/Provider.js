import React, { createContext, useState } from 'react';
import propTypes from 'prop-types';

export const Context = createContext();

export function Provider({ children }) {
  const [planetsAPI, setPlanetsAPI] = useState([]);
  const [planetsAPIfilter, setPlanetsAPIfilter] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  return (
    <Context.Provider
      value={ {
        planetsAPI,
        planetsAPIfilter,
        filterByName,
        filterByNumericValues,
        setPlanetsAPI,
        setPlanetsAPIfilter,
        setFilterByName,
        setFilterByNumericValues,
      } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};
