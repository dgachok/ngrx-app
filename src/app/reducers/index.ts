import * as fromSearch from './search-reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  search: fromSearch.State;
}

export const reducers = {
  search: fromSearch.reducer
};

export interface FeatureState {
  title: string;
}

export const getActivitiesState = createFeatureSelector<State>('search');
export const getActivityEntityState = createSelector(getActivitiesState, (state: State) => state.search.title);
export const selectFeature = (state: State) => state.search;
export const selectFeatureTitle = createSelector(selectFeature, (state: FeatureState) => state.title);
