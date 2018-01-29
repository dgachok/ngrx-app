import * as SearchActions from '../actions/search-actions';

export interface State {
  searchItems: string;
  title: string;
}

const initialState: State = {
  searchItems: '',
  title: 'Angular'
};

export function reducer(state = initialState, action: SearchActions.Actions): State {
  switch (action.type) {
    case SearchActions.SEARCH: {
      return {
        ...state,
        searchItems: action.payload
      }
    }
    case SearchActions.TITLE: {
      return {
        ...state,
        title: action.payload
      }
    }

    default: {
      return state;
    }
  }
}
