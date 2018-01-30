import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {State} from './reducers';
import * as SearchActions from './actions/search-actions';
import {Observable} from 'rxjs/Observable';
import * as fromRoot from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title$: Observable<string>;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.title$ = this.store.pipe(select(fromRoot.selectFeatureTitle));
    setTimeout(() => this.changeTitle('React'), 2000);
  }

  changeTitle(value: string) {
    this.store.dispatch(new SearchActions.Title(value));
  }

}
