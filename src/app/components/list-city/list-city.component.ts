import { Component, OnInit } from '@angular/core';
import { LocationRepository } from 'src/app/services/location.repository';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

  // VARIABLES (Define what to show)
  locations:any

  // CONSTRUCTOR
  constructor(private weatherSvc:WeatherService, private locationRepo:LocationRepository) {}

  // ON INITIALIZATION
  async ngOnInit(): Promise<void> {
    // Retrieve all locations stored in database
    console.info('>>> Initializing list of cities...')
    // Return array of cities to be displayed
    this.locations = await this.locationRepo.getAllLocations()
  }
}
