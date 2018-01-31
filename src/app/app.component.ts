import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadFilms} from './actions/film-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>) {
    this.store.dispatch(loadFilms());
  }

  ngOnInit() {
  }
}
