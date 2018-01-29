import {Action} from "@ngrx/store";
export const SEARCH = '[Books] Search';
export const TITLE = '[Books] Title';

export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {}
}

export class Title implements Action {
  readonly type = TITLE;

  constructor(public payload: string) {}
}

export type Actions
  = Search
  | Title;
