import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GlobalComponent } from './global/global.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { UnitedStatesComponent } from './united-states/united-states.component';
import { CountryTimelineComponent } from './country-timeline/country-timeline.component';
import { StatesComponent } from './states/states.component';


const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: 'global', component: GlobalComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'US', component: UnitedStatesComponent},
  {path: 'US_timeline', component: CountryTimelineComponent},
  {path: 'states', component: StatesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
