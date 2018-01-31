import {
  SELECT_FILM_ACTION,
  LOAD_FILMS_SUCCESS_ACTION, ADD_COMMENT_SUCCESS_ACTION, REMOVE_COMMENT_SUCCESS_ACTION
} from '../actions/film-actions';

let commentId = 0;
export const loadFilms = (state) => state.films;
export const selectedFilm = (state) => state.films.filter(film => film.id === state.selected)[0];
const selectFilmFromArray = (films, filmId) => films.filter(film => film.id === filmId)[0];
const selectComments = (film) => film.comments;
const removeCommentFromFilm = (listOfFilms, {commentId, filmId}) => {
  const films = [...listOfFilms];
  let index = 0;
  const selectFilm = selectFilmFromArray(films, filmId);
  const comments = selectComments(selectFilm);
  comments.forEach((comment, i) => {
    if (comment.id === commentId) { index = i; }
  });
  comments.splice(index, 1);
  return films;
};
const addCommentForFilm = (listOfFilms, {comment, filmId}) => {
  const films = [...listOfFilms];
  const selectFilm = selectFilmFromArray(films, filmId);
  const comments = selectComments(selectFilm);
  comments.push({id: commentId, comment: comment});
  commentId++;
  return films;
};

const films = (state = [], action) => {
  switch (action.type) {
    case LOAD_FILMS_SUCCESS_ACTION: {
      return action.payload;
    }
    case ADD_COMMENT_SUCCESS_ACTION: {
      return addCommentForFilm(state, action.payload);
    }
    case REMOVE_COMMENT_SUCCESS_ACTION: {
      return removeCommentFromFilm(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

const selected = (state, action) => {
  switch (action.type) {
    case SELECT_FILM_ACTION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const reducers = {films, selected};

