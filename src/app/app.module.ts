import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmDetailsComponent} from './components/film-details/film-details.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { FilmService } from './services/film.service';

export const firebaseConfig  = {
  apiKey: "AIzaSyClh_a3uJSW6LvRvmFsz7ptR4CQOzmE8Sg",
  authDomain: "watchit-23bf6.firebaseapp.com",
  databaseURL: "https://watchit-23bf6.firebaseio.com",
  projectId: "watchit-23bf6",
  storageBucket: "watchit-23bf6.appspot.com",
  messagingSenderId: "1002758279864"
};

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ FilmService, AngularFireDatabase ],
  bootstrap: [AppComponent]
})
export class AppModule { }
