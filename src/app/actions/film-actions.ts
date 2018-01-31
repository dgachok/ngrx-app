export const ADD_COMMENT_ACTION = 'ADD_COMMENT_ACTION';
export const REMOVE_COMMENT_ACTION = 'REMOVE_COMMENT_ACTION';
export const LOAD_FILMS_ACTION = 'LOAD_FILMS_ACTION';
export const LOAD_FILMS_SUCCESS_ACTION = 'LOAD_FILMS_SUCCESS_ACTION';
export const SELECT_FILM_ACTION = 'SELECT_FILM_ACTION';

export const addComment = (comment) => ({
  type: ADD_COMMENT_ACTION,
  payload: comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT_ACTION,
  payload: comment
});

export const selectFilm = (filmId) => ({
  type: SELECT_FILM_ACTION,
  payload: filmId
});

export const loadSuccessFilms = (films) => ({
  type: LOAD_FILMS_SUCCESS_ACTION,
  payload: films
});

export const loadFilms = () => ({
  type: LOAD_FILMS_ACTION
});
