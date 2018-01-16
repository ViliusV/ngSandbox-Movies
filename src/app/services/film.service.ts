import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

import { Film } from '../entities/film';

//ToDo: Firebase auth

@Injectable()
export class FilmService {
    constructor(private db: AngularFireDatabase) {
    }

    get(): Observable<Film[]> {
        return this.db.list('film').snapshotChanges().pipe(
            map(changes => {
                return changes.map(f =>
                    ({ id: f.payload.key, ...f.payload.val() }))
            }),
            tap(_ => console.log('fetched films')),
            catchError(this.handleError('get', []))
        );
    }

    getDetails(film: Film): Observable<Film> {
        return this.db.object<Film>(`film-details/${film.id}`).valueChanges().pipe(
            tap(_ => console.log(`fetched film ${film.id} details`)),
            catchError(this.handleError('getDetails', null))
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