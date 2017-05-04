import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../classes/hero';
import 'rxjs/add/operator/switchMap';


@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit{
	@Input('heroesArrInput') heroesDetailArr: Hero;
	@Input('heroDetailInput') heroDetail: Hero;
	// Passed from <hero-detail [heroDetailInput]="selectedHero"></hero-detail>

	constructor(private heroService: HeroService,
			  private route: ActivatedRoute,
			  private location: Location){
	}

	ngOnInit(){
		/*this.route.params
		.switchMap((params: Params) => this.heroService.getHero(+params['id']))
		.subscribe(hero => this.heroDetail = hero);*/
		/*
			The switchMap operator maps the id in the Observable route parameters to a new Observable,
			the result of the HeroService.getHero() method.

		 	If a user re-navigates to this component while a getHero request is still processing,
		 	switchMap cancels the old request and then calls HeroService.getHero() again.

		 	The hero id is a number. Route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator.
		 */
	}

	goBack(): void {
		this.location.back();
	}

}
