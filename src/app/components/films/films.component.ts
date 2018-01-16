import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Film } from '../../entities/film';

import { FilmService } from '../../services/film.service';

@Component({
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
    films: Film[];

    constructor(private filmService: FilmService, private angularFireAuth: AngularFireAuth) {

    }

    ngOnInit() {
        this.angularFireAuth.authState.subscribe(user => {
			if (user) {
				this.fillList();
			}
		});
        
    }

    fillList(): void {
         this.filmService.get()
             .subscribe(films => this.films = films);
    }
}