import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private title: string = 'Films';
	private isAuthenticated: boolean = true;

	constructor(private angularFireAuth: AngularFireAuth) {

	}

	ngOnInit() {
		this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListener);
		//ToDo: use EventEmitter, so other components could subscribe to authenticate event
	}

	login(event) {
		this.isAuthenticated = true;
	}

	logout() {
		this.angularFireAuth.auth.signOut();
		this.isAuthenticated = false;
	}

	private firebaseAuthChangeListener(response) {
		if (response) {
			console.log('Logged in :)');
		} else {
			console.log('Logged out :(');
		}
	}
}
