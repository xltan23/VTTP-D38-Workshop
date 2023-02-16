import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCityComponent } from './components/add-city/add-city.component';
import { ListCityComponent } from './components/list-city/list-city.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

// localhost:8080 (Lists cities stored in database by default)
// localhost:8080/add-city (Goes into form field for user to input new cities)
// localhost:8080/weather/{city} (Calls Openweather API and shows weather at that city)
const routes: Routes = [
  {path:'', component:ListCityComponent},
  {path:'add-city', component:AddCityComponent},
  {path:'weather/:city', component:WeatherDetailsComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
