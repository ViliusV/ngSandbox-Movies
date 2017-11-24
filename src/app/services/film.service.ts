import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { Film } from '../entities/film';


@Injectable()
export class FilmService {
    private filmsUrl = 'api/films';


    constructor(private http: HttpClient) {

    }

    get(): Observable<Film[]> {
        return this.http.get<Film[]>(this.filmsUrl)
            .pipe(
                tap(_ => console.log('fetched films')),
                catchError(this.handleError('get', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}