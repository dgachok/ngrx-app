import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {addComment, removeComment} from '../../actions/film-actions';
import {Observable} from 'rxjs/Observable';
import {selectedFilm} from '../../reducers/film-reducers';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html'
})
export class CommentsListComponent implements OnInit {
  $selectedFilm: Observable<any>;
  selectedFilm;

  constructor(private store: Store<any>) {
    this.$selectedFilm = store.select(selectedFilm);
  }

  ngOnInit() {
    this.$selectedFilm.subscribe((film) => this.selectedFilm = film);
  }

  submitForm(e, form, filmId) {
    e.preventDefault();
    this.store.dispatch(addComment({...form.value, filmId}));
    form.reset();
  }

  removeComment(commentId, filmId) {
    this.store.dispatch(removeComment({commentId: commentId, filmId: filmId}));
  }

}
