const fetchPlanets = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  const data = await response.json();
  const planets = data.results;

  return planets;
};

export default fetchPlanets;
