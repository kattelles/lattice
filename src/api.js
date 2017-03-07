const API_KEY = '0129bad7da32b66b8d64180b7f0ad0e0';
const API_URL = 'https://api.themoviedb.org/3';

function request(path) {
  return fetch(`${API_URL}${path}?api_key=${API_KEY}`).then(res => res.json());
}

const apiObj = {
  fetchPopularMovies() {
    return request(`/movie/popular`);
  },
  fetchMovie(movieId) {
    return request(`/movie/${movieId}`);
  },
  searchMovies(query) {
    return fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  }
};

window.API = apiObj;

export default apiObj;
