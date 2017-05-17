import { Component } from '@angular/core';
import { Hero } from './classes/hero';
import { KeyupComponent } from "./user-input/keyup/keyup.component";
import { Heroine } from "./classes/heroine";
import { HEROS_DATA } from './classes/heroes';
import { HeroService } from './hero.service';
import { GetComponentPropertyComponent } from './simple-eg/get-component-property/get-component-property.component';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	providers: [HeroService]
	/*
		The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent.
		The AppComponent, as well as its child components, can use that service to get hero data.
	*/
})
export class AppComponent{
	appName: string;
	color: string;

	constructor(){
		this.appName = 'Tour of Heroes Tutorial';
	}

}


