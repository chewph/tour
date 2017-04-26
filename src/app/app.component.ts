import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Keyupv1Component } from "./UserInput/keyupv1/keyupv1.component";
import { Heroine } from "./heroine";
import { MOCKHEROES } from './mock-heroes';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	providers: [HeroService]
})
export class AppComponent{
	title: 'Tour of Heroes';

}


