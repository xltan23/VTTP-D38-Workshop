import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from 'src/app/models/Location';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  // VARIABLES
  form!:FormGroup
  country!:string
  city!:string
  imageUrl!:string
  location!:Location

  // CONSTRUCTOR
  constructor(private fb:FormBuilder, private router:Router, private weatherSvc:WeatherService) {}

  // ON INITIALIZATION
  ngOnInit(): void {
      this.form = this.createForm()
  }

  // ON SUBMIT: Retrieve country,city, imageUrl to create location object
  add() {
    const country = this.form?.value['country']
    const city = this.form?.value['city']
    const imageUrl = this.form?.value['imageUrl']
    this.location = {country:country, city:city, imageUrl:imageUrl}
    console.info('>>> Adding location to repository', this.location)
    // Add location to repository (Database)
    this.weatherSvc.addLocation(this.location)
    this.router.navigate(['/'])
  }

  // Create form with empty fields
  private createForm():FormGroup {
    return this.fb.group({
      country:this.fb.control(''),
      city:this.fb.control(''),
      imageUrl:this.fb.control('')
    })
  }
}
