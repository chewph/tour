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

const ROUTES: Routes = [
	{path: '', redirectTo: '/', pathMatch: 'full'},
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
	{ path: 'ScrollTo', component: ScrollToComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);