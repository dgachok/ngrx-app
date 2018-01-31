import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class FilmService {
  commentId = 0;
  public films = [
    {
      id: 1,
      title: 'Titanic',
      director: 'James Cameron',
      image: 'https://titanicsound.files.wordpress.com/2014/11/titanic_movie-hd-1.jpg',
      description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious,' +
      ' ill-fated R.M.S. Titanic.',
      comments: []
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption' +
      ' through acts of common decency.',
      image: 'http://12millionov.com/wp-content/uploads/2015/06/%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1' +
      '%8B%D0%B5-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B-1-697x1000.jpg',
      comments: []
    },
  ];
  constructor() {
  }

  loadFilms() {
    return Observable.of(this.films);
  }

  addCommentFilms(comment) {
    const selectFilm = this.films.filter(film => film.id === comment.filmId)[0];
    selectFilm.comments.push({id: this.commentId, comment: comment.comment});
    this.commentId++;
    return Observable.of(null);
  }
  removeCommentFilms({commentId, filmId}) {
    let index = 0;
    const selectFilm = this.films.filter(film => film.id === filmId)[0];
    selectFilm.comments.forEach((comment, i) => {
      if (comment.id === commentId) { index = i; }
    });
    selectFilm.comments.splice(index, 1);
    return Observable.of(null);
  }
}
