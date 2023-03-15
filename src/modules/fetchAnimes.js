const fetchAnime = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const getMovie = await response.json();
  const returnedAnimes = getMovie.slice(100, 140);
  return returnedAnimes;
};

export default fetchAnime;
