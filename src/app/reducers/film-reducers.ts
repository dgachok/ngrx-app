import {
  SELECT_FILM_ACTION,
  LOAD_FILMS_SUCCESS_ACTION
} from '../actions/film-actions';

export const loadFilms = (state) => state.films;
export const selectedFilm = (state) => state.films.filter(film => film.id === state.selected)[0];

const films = (state = [], action) => {
  switch (action.type) {
    case LOAD_FILMS_SUCCESS_ACTION: {
      return action.payload;
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

