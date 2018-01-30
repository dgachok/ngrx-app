//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// components
import { AppComponent } from './app.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmsDetailsComponent } from './components/films-details/films-details.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';

// reducers
import { reducers } from './reducers/film-reducers';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    FilmsDetailsComponent,
    CommentsListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
