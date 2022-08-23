import React, { useContext } from 'react';
import { Context } from '../context/Provider';

// import { Container } from './styles';

function FilterPrompts() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(Context);

  const handleDeleteFilter = (toBeDeleted) => {
    console.log(filterByNumericValues);
    console.log(toBeDeleted);

    const newFilterPrompt = filterByNumericValues
      .filter((filter) => (filter.column !== toBeDeleted));

    setFilterByNumericValues(newFilterPrompt);
  };

  const renderFilters = filterByNumericValues.map((filter, index) => (
    <div key={ filter.column + index } data-testid="filter" id={ `filter-${filter}` }>
      <span>
        Column:
        {' '}
        {filter.column.charAt(0).toUpperCase() + filter.column.slice(1)}
        {' '}
        {' | '}
        Comparison:
        {' '}
        {filter.comparison.charAt(0).toUpperCase() + filter.comparison.slice(1)}
        {' '}
        {' | '}
        Value:
        {' '}
        {filter.value}
      </span>
      {' '}
      <button
        type="button"
        onClick={ () => handleDeleteFilter(filter.column) }
      >
        X
      </button>
    </div>
  ));

  return (
    <div>
      { renderFilters }
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => setFilterByNumericValues([]) }
      >
        Remove Filters
      </button>
    </div>
  );
}

export default FilterPrompts;
