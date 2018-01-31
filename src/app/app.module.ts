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
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {FilmEffects} from './effects/film-effects';
import {FilmService} from './services/film.service';
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    FilmsDetailsComponent,
    CommentsListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([FilmEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    FormsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
