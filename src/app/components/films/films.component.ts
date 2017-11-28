import { Component, OnInit } from '@angular/core';

import { Film } from '../../entities/film';

import { FilmService } from '../../services/film.service';

@Component({
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
    films: Film[];

    constructor(private filmService: FilmService) {

    }

    ngOnInit() {
        this.fillList();
    }

    fillList(): void {
        this.filmService.get()
            .subscribe(films => this.films = films);
    }
}