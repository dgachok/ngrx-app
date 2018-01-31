import {REMOVE_COMMENT_ACTION, ADD_COMMENT_ACTION, SELECT_FILM_ACTION} from "../actions/film-actions";

const filmsState = [
  {
    id: 1,
    title: 'Titanic',
    director: 'James Cameron',
    image: 'https://titanicsound.files.wordpress.com/2014/11/titanic_movie-hd-1.jpg',
    description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    comments: [
      {
        id: 1,
        comment: 'test'
      },
      {
        id: 2,
        comment: 'test'
      }
    ]
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    image: 'http://12millionov.com/wp-content/uploads/2015/06/%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B-1-697x1000.jpg',
    comments: [
      {
        id: 1,
        comment: 'test'
      },
      {
        id: 2,
        comment: 'test'
      }
    ]
  },
];

const films = (state = filmsState, action) => {
  switch (action.type) {
    case ADD_COMMENT_ACTION: {
      return [
        ...state,
        ...action.payload
      ];
    }
    case REMOVE_COMMENT_ACTION: {
      return [
        ...state,
        ...action.payload
      ];
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

export const loadFilms = (state) => state.films;
export const selectedFilm = (state) => state.films.filter(film => film.id === state.selected)[0];
export const selectComments = (state) => {
  const selectFilm = selectedFilm(state);
  return selectFilm ? selectFilm.comments : [];
};

export const reducers = {films, selected};

