import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {FilmService} from '../services/film.service';
import {
  ADD_COMMENT_ACTION, LOAD_FILMS_ACTION, loadFilms, loadSuccessFilms,
  REMOVE_COMMENT_ACTION, addCommentSuccess, removeCommentSuccess
} from '../actions/film-actions';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmEffects {
  @Effect() loadFilms$: Observable<Action> = this.actions$
    .ofType(LOAD_FILMS_ACTION)
    .mergeMap((action: any) =>
      this.filmService.loadFilms().map(loadSuccessFilms)
    );

  @Effect() addCommentFilms$: Observable<Action> = this.actions$
    .ofType(ADD_COMMENT_ACTION)
    .mergeMap((action: any) =>
      this.filmService.addCommentFilms(action.payload).map(() => addCommentSuccess(action.payload))
    );

  @Effect() removeCommentFilms$: Observable<Action> = this.actions$
    .ofType(REMOVE_COMMENT_ACTION)
    .mergeMap((action: any) =>
      this.filmService.removeCommentFilms(action.payload).map(() => removeCommentSuccess(action.payload))
    );

  constructor(
    private actions$: Actions,
    private filmService: FilmService
  ) {}
}
