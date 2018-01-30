import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class FilmService {

  constructor() {
  }

  loadFilms() {
    const films = [
      {
        id: 1,
        name: 'Titinic',
        director: 'King',
        description: 'test',
        comments: [
          {
            id: 1,
            comment: ''
          },
          {
            id: 2,
            comment: ''
          }
        ]
      },
      {
        id: 2,
        name: 'Yes',
        director: 'King',
        description: 'test',
        comments: [
          {
            id: 1,
            comment: ''
          },
          {
            id: 2,
            comment: ''
          }
        ]
      },
    ];
    return Observable.of(films);
  }
}
