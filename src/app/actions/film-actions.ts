export const ADD_COMMENT_ACTION = 'ADD_COMMENT_ACTION';
export const REMOVE_COMMENT_ACTION = 'REMOVE_COMMENT_ACTION';
export const LOAD_FILMS_ACTION = 'LOAD_FILMS_ACTION';
export const LOAD_FILMS_SUCCESS_ACTION = 'LOAD_FILMS_SUCCESS_ACTION';
export const SELECT_FILM_ACTION = 'SELECT_FILM_ACTION';

export const addComment = (comment, filmId) => ({
  type: ADD_COMMENT_ACTION,
  payload: {...comment, filmId: filmId}
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT_ACTION,
  payload: comment
});

export const selectFilm = (film) => ({
  type: SELECT_FILM_ACTION,
  payload: film
});

export const loadSuccessFilms = (films) => ({
  type: LOAD_FILMS_SUCCESS_ACTION,
  payload: films
});

export const loadFilms = () => ({
  type: LOAD_FILMS_ACTION
});
