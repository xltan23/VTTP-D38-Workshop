import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AddCityComponent } from './components/add-city/add-city.component';
import { ListCityComponent } from './components/list-city/list-city.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationRepository } from './services/location.repository';

@NgModule({
  declarations: [
    AppComponent,
    AddCityComponent,
    ListCityComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [LocationRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
