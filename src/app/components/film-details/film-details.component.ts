import { Component, OnInit, Input } from "@angular/core";

import { Film } from '../../entities/film';
import { FilmService } from '../../services/film.service';
import { TrailerService } from "../../services/trailer.service";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-film-details',
    templateUrl: './film-details.component.html'
})
export class FilmDetailsComponent implements OnInit {

    @Input() public film: Film;

    public trailerUrl: SafeUrl;

    constructor(
        private filmService: FilmService,
        private trailerService: TrailerService,
        private domSanitizer: DomSanitizer) {
    }

    ngOnInit() {

    }

    setDetails() {
        if (this.film) {
            this.filmService.getDetails(this.film)
                .subscribe(f => {
                    this.film = f;
                    this.film.summary = "abc"; //ToDo: remove this dummy line

                });
        }
    }

    setTrailer() {
        if (this.film) {
            this.trailerService.getTrailerId(this.film.id)
                .subscribe(t => {
                    this.film.trailerId = t;
                    this.trailerUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.film.trailerId}?rel=0`);
                })

        }
    }
} 