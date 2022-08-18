import React, { useContext } from 'react';
import { Context } from '../context/Provider';

export default function Table() {
  // STATES
  const { planetsAPI, filterByName, filterByNumericValues } = useContext(Context);

  const filterName = (planets) => planets.filter((planet) => (planet.name.toUpperCase()
    .includes(filterByName.toUpperCase())));

  const filterValue = () => {
    const filteredPlanets = filterByNumericValues.reduce((prev, current) => {
      console.log('PREV', prev);
      console.log('CURR', current);

      return prev.filter((filter) => {
        if (current.comparison === 'maior que') {
          return Number(filter[current.column]) > Number(current.value);
        }

        if (current.comparison === 'menor que') {
          return Number(filter[current.column]) < Number(current.value);
        }

        if (current.comparison === 'igual a') {
          return Number(filter[current.column]) === Number(current.value);
        }

        return null;
      });
    }, planetsAPI);

    return filterName(filteredPlanets);
  };

  const renderTable = () => {
    if (planetsAPI) {
      return (
        filterValue().map((planet, index) => (
          <tr key={ planet.name } className={ `row-${index % 2}` }>
            <td>
              {planet.name}
            </td>
            <td>
              {planet.rotation_period}
            </td>
            <td>
              {planet.orbital_period}
            </td>
            <td>
              {planet.diameter}
            </td>
            <td>
              {planet.climate}
            </td>
            <td>
              {planet.gravity}
            </td>
            <td>
              {planet.terrain}
            </td>
            <td>
              {planet.surface_water}
            </td>
            <td>
              {planet.population}
            </td>
            <td>
              {planet.films.map((film, index2) => (
                <span key={ film + index2 }>
                  <a href={ film }>
                    { film }
                  </a>
                  <br />
                </span>
              ))}
            </td>
            <td>
              {planet.created}
            </td>
            <td>
              {planet.edited}
            </td>
            <td>
              <a href={ planet.url }>
                {planet.url}
              </a>
            </td>
          </tr>
        ))
      );
    }
  };

  return (
    <main>
      <table border="1">
        <thead>
          <tr>
            <th> Name </th>
            <th> Rotation Period </th>
            <th> Orbital Period </th>
            <th> Diameter </th>
            <th> Climate </th>
            <th> Gravity </th>
            <th> Terrain </th>
            <th> Surface Water </th>
            <th> Population </th>
            <th> Films </th>
            <th> Created </th>
            <th> Edited </th>
            <th> URL </th>
          </tr>
        </thead>
        <tbody>
          {planetsAPI.length > 0 && renderTable()}
        </tbody>
      </table>
    </main>
  );
}
