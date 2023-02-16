import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { Location } from "../models/Location";
import { LocationRepository } from "./location.repository";

@Injectable({
    providedIn:'root'
}) 
export class WeatherService {

    // CONSTRUCTOR
    constructor(private http:HttpClient, private locationRepo:LocationRepository) {}

    // METHOD
    // Send GET request to Openweather app
    getWeather(location:string, apiKey:string):Promise<any> {
        // Set up: q={location}&appid={apiKey}
        const params = new HttpParams()
                            .set("q",location)
                            .set("appid", apiKey)
        return lastValueFrom(this.http.get(environment.openweather_api_url, {params:params})) 
    }  
        
    // Add location to database
    addLocation(location:Location) {
        this.locationRepo.addLocation(location)
    }
}