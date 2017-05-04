import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroService } from '../hero.service';


/*
 * While the details of a selected hero displays at the bottom of the HeroesComponent,
 * users should be able to navigate to the HeroDetailComponent in the following additional ways:

 - From the dashboard to a selected hero.
 - From the heroes list to a selected hero.
 - From a "deep link" URL pasted into the browser address bar.
 */
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = []; //Define a heroes array property

	//Inject the HeroService in the constructor and hold it in a private heroService field
	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		this.heroService.getHerosAsynService()
		.then(heroes => this.heroes = heroes.slice(1, 5));
		//specify four heroes (2nd, 3rd, 4th, and 5th) with the Array.slice method.
	}

}
