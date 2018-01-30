import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectFilm} from "../../actions/film-actions";

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html'
})
export class FilmsListComponent implements OnInit {
  $films: Observable<any>;
  $selected: Observable<any>;
  films = [];
  selected;

  constructor(private store: Store<any>) {
    this.$films = store.select('films');
    this.$selected = store.select('selected');
  }

  ngOnInit() {
    this.$films
      .filter(films => films && films.length)
      .switchMap((films) => {
        this.films = films;
        return this.$selected;
      }).subscribe(selected => {
        if (selected) {
          this.selected = selected;
        } else {
          this.selected = this.films[0];
        }
    });
  }

  chooseFilm(film) {
    this.store.dispatch(selectFilm(film));
  }

}
