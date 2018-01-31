import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectedFilm} from '../../reducers/film-reducers';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html'
})
export class FilmsDetailsComponent implements OnInit, OnDestroy {
  $selected: Observable<any>;
  selected;
  selectFilmSubscription: Subscription;

  constructor(private store: Store<any>) {
    this.$selected = store.select(selectedFilm);
  }

  ngOnInit() {
    this.selectFilmSubscription = this.$selected.subscribe(selected => this.selected = selected);
  }

  ngOnDestroy() {
    this.selectFilmSubscription.unsubscribe();
  }
}
