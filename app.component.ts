import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { InboxPage } from '../pages/inbox/inbox';
import { UserPage } from '../pages/user/user';
import { StartPage } from '../pages/start/start';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	
	rootPage: any = StartPage;
	pages: Array<{titleENG: string, titleSP: string, titleFR: string, component: any}>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();
		// used for an example of ngFor and navigation
		this.pages = [
			{ titleENG: 'Home', titleSP: 'Casa', titleFR: 'Maison', component: HomePage },
			{ titleENG: 'Inbox', titleSP: 'Correo', titleFR: 'Réception',  component: InboxPage},
			{ titleENG: 'My Profile', titleSP: 'Perfil', titleFR: 'Debut', component: UserPage },
			{ titleENG: 'Exit', titleSP: 'Cerca', titleFR: 'Sortie', component: StartPage },			
			];
		}

		initializeApp() {
		this.platform.ready().then(() => {
		// Okay, so the platform is ready and our plugins are available.
		// Here you can do any higher level native things you might need.
		this.statusBar.styleDefault();
		this.splashScreen.hide();
		});
	}

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
