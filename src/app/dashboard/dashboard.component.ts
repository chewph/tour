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
  template: `
	  <h3>Top Heroes</h3>
	  <div class="grid grid-pad">
		  <a *ngFor="let hero of heroes" [routerLink]="['/detail', hero.id]" class="col-1-4">
			  <div class="module hero">
				  <h4>{{hero.name}}</h4>
			  </div>
		  </a>
	  </div>
  `,
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
