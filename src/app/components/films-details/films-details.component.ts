import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html'
})
export class FilmsDetailsComponent implements OnInit {
  $selected: Observable<any>;
  selected;

  constructor(private store: Store<any>) {
    this.$selected = store.select('selected');
  }

  ngOnInit() {
    this.$selected.subscribe(selected => this.selected = selected);
  }
}
