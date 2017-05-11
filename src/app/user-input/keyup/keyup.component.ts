import { Component, OnInit } from '@angular/core';
import { Hero } from  '../../classes/hero';
import { LoggerService } from '../../logger/logger.service';
import { HeroDetailComponent } from '../../hero-detail/hero-detail.component';

@Component({
	selector: 'keyup',
	templateUrl: './keyup.component.html',
	styleUrls: [ './keyup.component.css' ]
})
export class KeyupComponent {
	currentHero = new Hero( 47, 'My Hero from KeyupComponent');
	values = '';

	constructor(private logger: LoggerService){

	}

	onClick(){
		this.logger.log(this.currentHero.name);
	}

	onKey(event: any){
		this.values += event.target.value + ' | ';
		// target is the reference to the input text that raised the event
	}

}
