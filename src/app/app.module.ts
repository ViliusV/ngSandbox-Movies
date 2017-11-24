import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';

import { DummyFilmService }  from './services/dummy-film.service';
import { FilmService } from './services/film.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      DummyFilmService, { dataEncapsulation: false }
    )
  ],
  providers: [ FilmService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
