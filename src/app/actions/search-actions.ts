import {Action} from '@ngrx/store';

export enum SearchActionTypes {
  SEARCH = '[Books] Search',
  TITLE = '[Books] Title'
}

export class Search implements Action {
  readonly type = SearchActionTypes.SEARCH;

  constructor(public payload: string) {}
}

export class Title implements Action {
  readonly type = SearchActionTypes.TITLE;

  constructor(public payload: string) {}
}

export type SearchActions
  = Search
  | Title;
