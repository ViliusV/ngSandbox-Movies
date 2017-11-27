import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TrailerService {
    private trailersUrl = 'api/trailer';

    getTrailerId(filmId: number): Observable<string>{
        return of('V75dMMIW2B4'); //LoTR
        //ToDo: implement
    }
}