import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { ClickMeComponent } from '../user-input/clickme/clickme.component';
import { KeyupComponent } from '../user-input/keyup/keyup.component';
import { LoopbackComponent } from '../user-input/loopback/loopback.component';
import { LittleTourComponent } from '../user-input/little-tour/little-tour.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroService } from "../hero.service";
import { GetComponentPropertyComponent } from '../simple-eg/get-component-property/get-component-property.component';
import { ForloopEgComponent } from '../simple-eg/forloop-eg/forloop-eg.component';
import { BindPropertyComponent } from '../simple-eg/bind-property/bind-property.component';
import { MasterComponent } from '../master-detail/master/master.component';
import { DetailComponent } from '../master-detail/detail/detail.component';
import { ShowHideComponent } from '../simple-eg/show-hide/show-hide.component';
import { ScrollToComponent } from '../simple-eg/scroll-to/scroll-to.component';
import { ScrollToModule } from 'ng2-scroll-to';
import { ExamplesMenuComponent } from '../examples-menu/examples-menu.component';
import { ChildRouteComponent } from '../simple-eg/child-route/child-route.component';
import { ChildoneComponent } from '../simple-eg/child-route/childone/childone.component';
import { ChildtwoComponent } from '../simple-eg/child-route/childtwo/childtwo.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ParentComponent } from '../simple-eg/input-output/parent.component'
import { ChildComponent } from '../simple-eg/input-output/child.component'


const ROUTES: Routes = [
	{ path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
	{ path: 'TourOfHeroes', component: HeroesComponent },
	{ path: 'detail/:id',component: HeroDetailComponent },
	{ path: 'Dashboard', component: DashboardComponent },
	{
		path: 'ExamplesMenu', component: ExamplesMenuComponent,
		children: [
			{ path: '', redirectTo: '', pathMatch: 'full' },
			{ path: 'HerosList', component: HeroesComponent },
			{ path: 'ShowHide', component: ShowHideComponent },
			{ path: 'GetComponentProperty', component: GetComponentPropertyComponent },
			{ path: 'DoForLoop', component: ForloopEgComponent },
			{ path: 'DoDataBind', component: BindPropertyComponent },
			{ path: 'ClickMe', component: ClickMeComponent },
			{ path: 'KeyupAnyEvent', component: KeyupComponent },
			{ path: 'LoopBack', component: LoopbackComponent },
			{ path: 'LittleTour', component: LittleTourComponent },
			{ path: 'Master-Detail', component: MasterComponent },
			{ path: 'ScrollTo', component: ScrollToComponent },
			/*{ path: 'Input-Output', component: ParentComponent },*/
			{
				path: 'ChildRoute', component: ChildRouteComponent,
				children: [
					{ path: '', redirectTo: '', pathMatch: 'full' },
					{ path: 'Childone', component: ChildoneComponent },
					{ path: 'Childtwo', component: ChildtwoComponent },
				]
			}
		]
	}
]

/*{ path: 'HerosList', component: HeroesComponent },
 { path: 'ShowHide',  component: ShowHideComponent },
 { path: 'GetComponentProperty', component: GetComponentPropertyComponent },
 { path: 'DoForLoop', component: ForloopEgComponent },
 { path: 'DoDataBind', component: BindPropertyComponent },
 { path: 'ClickMe', component: ClickMeComponent },
 { path: 'KeyupAnyEvent', component: KeyupComponent },
 { path: 'LoopBack', component: LoopbackComponent },
 { path: 'LittleTour', component: LittleTourComponent },
 { path: 'Master-Detail', component: MasterComponent },
 { path: 'ScrollTo', component: ScrollToComponent },
 { path: 'ExamplesMenu', component: ExamplesMenuComponent }*/


//export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);