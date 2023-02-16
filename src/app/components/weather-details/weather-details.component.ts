import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Weather } from 'src/app/models/Weather';
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {

  // VARIABLE
  city!:string
  country!:string
  imageUrl!:string
  weather = new Weather("",0,0,0,"",0,0)
  params$!:Subscription

  // CONSTRUCTOR
  constructor(private weatherSvc:WeatherService, private activatedRoute:ActivatedRoute, private router:Router) {}

  // ON INITIALIZING
  ngOnInit(): void {
      console.info(">>> Initializing weather details")
      // Subscribe to event where param is passed to router (i.e. location name)
      this.params$ = this.activatedRoute.params.subscribe(
        (params) => {
          // Takes the attribute value 
          console.info('Param value: ', params['city'])
          this.city = params['city']
        }
      )
      console.info(this.city)
      this.getWeatherFromAPI(this.city)
  }

  // ON TERMINATION
  ngOnDestroy(): void {
      console.info('>>> Destroying subscription observable!')
      this.params$.unsubscribe()
  }

  // Retrieve weather info for the location 
  getWeatherFromAPI(location:string) {
    this.weatherSvc.getWeather(location, environment.openweather_api_key)
                    .then((result) => {
                      // Create weather object based on the result returned from API
                      this.weather = new Weather(
                        location,
                        result.main.temp,
                        result.main.pressure,
                        result.main.humidity,
                        result.weather.description,
                        result.wind.windSpeed,
                        result.wind.windDegree
                      )
                    })
                    .catch((error) => {
                      console.info(error)
                    })
  }
}
