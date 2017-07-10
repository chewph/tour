import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-hero-detail',
  template: `<div>
				<span [style.text-decoration]="lineThrough">
 		  		   {{hero?.name}}
  		  		</span>
		  		<button (click)="delete()">Delete</button>
  		  </div>`,
  styleUrls: ['./big-hero-detail.component.css']
})
export class BigHeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
