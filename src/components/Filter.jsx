import React, { useContext, useState } from 'react';
import { Context } from '../context/Provider';

export default function Filter() {
  const { setFilterByName, setFilterByNumericValues,
    filterByNumericValues } = useContext(Context);

  const [nameState, setNameState] = useState('');
  const [columnState, setColumnState] = useState('population');
  const [operatorState, setOperatorState] = useState('maior que');
  const [valueState, setValueState] = useState(0);

  const handleFilter = ({ target }) => {
    if (target.id === 'filter-name') {
      setFilterByName(target.value);
      setNameState(target.value);
    }

    if (target.id === 'select-column') {
      setColumnState(target.value);
    }

    if (target.id === 'select-operator') {
      setOperatorState(target.value);
    }

    if (target.id === 'number-value') {
      setValueState(target.value);
    }
  };

  const handleButton = () => {
    setFilterByNumericValues(
      [...filterByNumericValues,
        {
          column: columnState,
          comparison: operatorState,
          value: valueState,
        },
      ],
    );

    setOperatorState('maior que');
    setColumnState('population');
    setValueState(0);
  };

  const createOptions = () => {
    const columns = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];

    return columns.map((column) => (
      <option value={ column } key={ column }>
        { column }
      </option>
    ));
  };

  return (
    <div>
      <label htmlFor="filter-name">
        Filtrar por Nome:
        {' '}
      </label>
      <input
        type="text"
        id="filter-name"
        data-testid="name-filter"
        value={ nameState }
        onChange={ handleFilter }
      />

      {' '}

      <label htmlFor="select-column">
        Coluna:
        {' '}
      </label>
      <select
        id="select-column"
        data-testid="column-filter"
        onChange={ handleFilter }
        value={ columnState }
      >
        { createOptions() }
      </select>

      <label htmlFor="select-operator">
        Operador:
        {' '}
      </label>

      <select
        id="select-operator"
        data-testid="comparison-filter"
        onChange={ handleFilter }
        value={ operatorState }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>

      </select>

      <input
        type="number"
        id="number-value"
        data-testid="value-filter"
        value={ valueState }
        onChange={ handleFilter }
      />

      <button
        type="button"
        data-testid="button-filter"
        id="filter-button"
        onClick={ handleButton }
      >
        Filtrar
      </button>
    </div>
  );
}
