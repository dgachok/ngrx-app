import {REMOVE_COMMENT_ACTION, ADD_COMMENT_ACTION} from "../actions/film-actions";

const filmsState = [
  {
    id: 1,
    name: 'Titinic',
    director: 'King',
    description: 'test',
    comments: [
      {
        id: 1,
        comment: ''
      },
      {
        id: 2,
        comment: ''
      }
    ]
  },
  {
    id: 2,
    name: 'Yes',
    director: 'King',
    description: 'test',
    comments: [
      {
        id: 1,
        comment: ''
      },
      {
        id: 2,
        comment: ''
      }
    ]
  },
];

const films = (state = filmsState, action) => {
  switch (action.type) {
    case ADD_COMMENT_ACTION: {
      return [
        ...state,
        action.payload
      ];
    }
    case REMOVE_COMMENT_ACTION: {
      return [
        ...state,
        action.payload
      ]
    }
    default: {
      return state;
    }
  }
};

export const reducers = {films};

