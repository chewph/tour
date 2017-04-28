import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './user-input/clickme/clickme.component';
import { Keyupv1Component } from './user-input/keyup/keyupv1.component';
import { LoopbackComponent } from './user-input/loopback/loopback.component';
import { LittleTourComponent } from './user-input/little-tour/little-tour.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from "./hero.service";
import { GetComponentPropertyComponent } from './simple-eg/get-component-property/get-component-property.component';
import { ForloopEgComponent } from './simple-eg/forloop-eg/forloop-eg.component';

@NgModule({
	declarations: [
		AppComponent,
		ClickMeComponent,
		Keyupv1Component,
		LoopbackComponent,
		LittleTourComponent,
		HeroDetailComponent,
		HeroesComponent,
		GetComponentPropertyComponent,
		ForloopEgComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot([
			{
				path: 'HerosList',
				component: HeroesComponent
			},
			{
				path: 'GetComponentProperty',
				component: GetComponentPropertyComponent
			},
			{
				path: 'DoForLoop',
				component: ForloopEgComponent
			},
			{
				path: 'Click me',
				component: ClickMeComponent
			}
		])
	],
	providers: [ HeroService ],
	bootstrap: [ AppComponent ]
})
export class AppModule{
}
