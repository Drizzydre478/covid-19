import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './global/global.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { UnitedStatesComponent } from './united-states/united-states.component';
import { CountryTimelineComponent } from './country-timeline/country-timeline.component';
import { StatesComponent } from './states/states.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    HomeComponent,
    CountriesComponent,
    UnitedStatesComponent,
    CountryTimelineComponent,
    StatesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
