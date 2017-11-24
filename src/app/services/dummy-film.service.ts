import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Film } from '../entities/film';

export class DummyFilmService implements InMemoryDbService {
  createDb() {
    const films: Film[] = [
      new Film(1, "Godfather"),
      new Film(2, "Monty Python: Life of Brian"),
      new Film(3, "American Beauty"),
      new Film(4, "Eurotrip"),
      new Film(5, "Guardians of the Galaxy"),
      new Film(6, "The Big Lebowski"),
      new Film(7, "Pulp Fiction"),
      new Film(8, "Goodfellas"),
      new Film(9, "The Usual Suspects"),
      new Film(10, "Up")
    ];
    
    return {films};
  }
}