const getApiData = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie, index) => {
        return {
          poster: movie.poster,
          movieName: movie.movie,
          fullSentence: movie.full_line,
          year: movie.year,
          director: movie.director,
          audio: movie.audio,
          id: index.toString(),
        };
      });
      return dataClean;
    });
};
export default getApiData;
