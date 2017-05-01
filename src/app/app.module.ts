import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTING } from './classes/routes';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './user-input/clickme/clickme.component';
import { KeyupComponent } from './user-input/keyup/keyup.component';
import { LoopbackComponent } from './user-input/loopback/loopback.component';
import { LittleTourComponent } from './user-input/little-tour/little-tour.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from "./hero.service";
import { GetComponentPropertyComponent } from './simple-eg/get-component-property/get-component-property.component';
import { ForloopEgComponent } from './simple-eg/forloop-eg/forloop-eg.component';
import { BindPropertyComponent } from './simple-eg/bind-property/bind-property.component';
import { MasterComponent } from './master-detail/master/master.component';
import { DetailComponent } from './master-detail/detail/detail.component';
import { ShowHideComponent } from './simple-eg/show-hide/show-hide.component';
import { ScrollToComponent } from './simple-eg/scroll-to/scroll-to.component';
import { ScrollToModule } from 'ng2-scroll-to';
import { ExamplesMenuComponent } from './examples-menu/examples-menu.component';
import { ChildRouteComponent } from './simple-eg/child-route/child-route.component';
import { ChildoneComponent } from './simple-eg/child-route/childone/childone.component';
import { ChildtwoComponent } from './simple-eg/child-route/childtwo/childtwo.component';

@NgModule({
	declarations: [
		AppComponent,
		ClickMeComponent,
		KeyupComponent,
		LoopbackComponent,
		LittleTourComponent,
		HeroDetailComponent,
		HeroesComponent,
		GetComponentPropertyComponent,
		ForloopEgComponent,
		BindPropertyComponent,
		MasterComponent,
		DetailComponent,
		ShowHideComponent,
		ScrollToComponent,
		ExamplesMenuComponent,
		ChildRouteComponent,
		ChildoneComponent,
		ChildtwoComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ScrollToModule.forRoot(),
		ROUTING // routing CONST containing all routes to application
		/*RouterModule.forRoot([
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
		])*/
	],
	providers: [ HeroService ],
	bootstrap: [ AppComponent ]
})
export class AppModule{
}

/*
 const routes: Routes = [
 // basic routes
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'contactus', redirectTo: 'contact' },

 // authentication demo
 { path: 'login', component: LoginComponent },
 {
 path: 'protected',
 component: ProtectedComponent,
 canActivate: [ LoggedInGuard ]
 },

 // nested
 {
 path: 'products',
 component: ProductsComponent,
 children: childRoutes
 }
 ];
 */
