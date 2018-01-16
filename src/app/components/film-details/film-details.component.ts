import { Component, OnInit, Input } from "@angular/core";

import { Film } from '../../entities/film';
import { FilmService } from '../../services/film.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-film-details',
    templateUrl: './film-details.component.html',
    styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

    @Input() public film: Film;
    public trailerUrl: SafeUrl;
    public isReadMoreShown: boolean;
    public areDetailsShown: boolean;

    constructor(
        private filmService: FilmService,
        private domSanitizer: DomSanitizer) {
    }

    ngOnInit() {
    }

    toggleReadMoreView() {
        this.isReadMoreShown = !this.isReadMoreShown;
        if (this.isReadMoreShown && !this.trailerUrl){
            this.setTrailer();
        }
    }

    toggleDetailsView(){
        this.areDetailsShown = !this.areDetailsShown;
        if (this.areDetailsShown && !this.film.plot){
            this.setDetails();
        }
    }

    setTrailer() {
        if (this.film && this.film.trailerId) {
            this.trailerUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.film.trailerId}?rel=0`);
        }
    }

    setDetails(){
        //ToDo: check if user is authenticated
        this.filmService.getDetails(this.film).subscribe(
            f => this.film.plot = f != null? f.plot : null
        );
    }
    
} 