const API_KEY = "4bbccfc534d34263819d19ddf1e5ee6d";

export const requests = {
  feachTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-us`,
  feachNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&languager=en-us`,
  feactActionMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
