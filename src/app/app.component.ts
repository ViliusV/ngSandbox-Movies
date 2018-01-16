import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private title: string = 'Films';
	private isAuthenticated: boolean = false;

	constructor(private angularFireAuth: AngularFireAuth) {

	}

	ngOnInit() {
		this.angularFireAuth.authState.subscribe(user => {
			if (user) {
				// user logged in
				console.log('Logged in :)');
				this.isAuthenticated = true;
			}
			else {
				// user not logged in
				console.log('Anonymous user');
				this.isAuthenticated = false;
			}
		});

		//ToDo: use EventEmitter, so other components could subscribe to authenticate event
	}

	logout() {
		this.angularFireAuth.auth.signOut();
	}
}
