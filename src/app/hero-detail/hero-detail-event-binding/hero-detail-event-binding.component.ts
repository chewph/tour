import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Hero } from  '../../classes/hero';

@Component({
	selector: 'hero-detail-event-binding',
	inputs: [ 'hero' ],
	outputs: [ 'deleteRequest' ],
	template: `
		<div>
			<span [style.text-decoration]="lineThrough">
			  {{currentHero?.name}}
		    </span>
			<button (click)="delete()">Delete</button>
		</div>
	`,
	/*styleUrls: [ './hero-detail-event-binding.component.css' ]*/
})

export class HeroDetailEventBindingComponent{

	hero = new Hero( 78, 'Event Binding Hero Detail');
	// heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
	// Public Domain terms of use: http://www.wpclipart.com/terms.html
	heroImageUrl = 'images/hero.png';
	lineThrough = '';
	//@Input() prefix = '';

	// This component make a request but it can't actually delete a hero.
	deleteRequest = new EventEmitter<Hero>();

	delete(){
		alert(`Delete ${this.hero ? this.hero.name : 'the hero'}.`);
		this.deleteRequest.emit(this.hero);
		this.lineThrough = this.lineThrough ? '' : 'line-through';
	}

	deleteHero(hero: Hero) {
		alert(`Delete ${hero ? hero.name : 'the hero'}.`);
	}

}
