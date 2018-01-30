import {SearchActionTypes, SearchActions} from '../actions/search-actions';

export interface State {
  searchItems: string;
  title: string;
}

const initialState: State = {
  searchItems: '',
  title: 'Angular'
};

export function reducer(state = initialState, action: SearchActions): State {
  switch (action.type) {
    case SearchActionTypes.TITLE: {
      return {
        ...state,
        title: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
