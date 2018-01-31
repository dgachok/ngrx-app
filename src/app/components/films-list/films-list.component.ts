import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectFilm} from '../../actions/film-actions';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/combineLatest';
import {loadFilms, selectedFilm} from '../../reducers/film-reducers';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html'
})
export class FilmsListComponent implements OnInit, OnDestroy {
  $films: Observable<any>;
  $selected: Observable<any>;
  filmsListSubscription: Subscription;
  films = [];
  selected;

  constructor(private store: Store<any>) {
    this.$films = store.select(loadFilms);
    this.$selected = store.select(selectedFilm);
  }

  ngOnInit() {
    this.filmsListSubscription = Observable.combineLatest(
      this.$films.filter(films => films && films.length),
      this.$selected
    ).subscribe(([films, selected]) => {
        this.films = films;
        if (selected) {
          this.selected = selected;
        } else {
          this.chooseFilm(this.films[0]);
        }
    });
  }

  chooseFilm(film) {
    this.store.dispatch(selectFilm(film.id));
  }

  ngOnDestroy() {
    this.filmsListSubscription.unsubscribe();
  }
}
