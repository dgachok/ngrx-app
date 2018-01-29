import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store, select} from "@ngrx/store";
import {State} from "./reducers";
import {Title} from "./actions/search-actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title$: Observable<string>;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.title$ = this.store.pipe(select('title'));
    setTimeout(() => this.changeTitle('React'), 2000);
  }

  changeTitle(value: string){
    this.store.dispatch(new Title(value));
  }

}
