import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {addComment, removeComment} from '../../actions/film-actions';
import {Observable} from 'rxjs/Observable';
import {selectComments} from '../../reducers/film-reducers';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html'
})
export class CommentsListComponent implements OnInit {
  $selectComments: Observable<any>;

  constructor(private store: Store<any>) {
    this.$selectComments = store.select(selectComments);
  }

  ngOnInit() {
  }

  submitForm(value) {
    this.store.dispatch(addComment(value.comment));
  }

  removeComment(comment) {
    this.store.dispatch(removeComment(comment));
  }

}
