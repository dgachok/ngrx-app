import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  $films: Observable<any>;

  constructor(private store: Store<any>) {
    this.$films = store.select('films');
  }

  ngOnInit() {

  }
}
