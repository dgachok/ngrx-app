import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectFilm} from '../../actions/film-actions';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/combineLatest';

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
    this.$films = store.select('films');
    this.$selected = store.select('selected');
  }

  ngOnInit() {
    this.filmsListSubscription = Observable.combineLatest(
      this.$films.filter(films => films && films.length),
      this.$selected
    ).subscribe(([films, selected]) => {
        this.films = films;
        if (this.isEmpty(selected)) {
          this.chooseFilm(this.films[0]);
        } else {
          this.selected = selected;
        }
    });
  }

  chooseFilm(film) {
    this.store.dispatch(selectFilm(film));
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  ngOnDestroy() {
    this.filmsListSubscription.unsubscribe();
  }
}
