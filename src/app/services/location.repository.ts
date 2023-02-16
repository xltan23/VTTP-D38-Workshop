import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Dexie from "dexie";
import { Location } from "../models/Location";

@Injectable()
export class LocationRepository extends Dexie {

    // Dexie sets up a storage table
    location!:Dexie.Table<Location, string>

    // CONSTRUCTOR
    constructor(private router:Router) {
        // Database name
        super('locationdb')
        // Database stores cities (attribute) in location table
        this.version(1).stores({
            // location is the name of the table
            // city must be one of the attribute of the model
            location:'city'
        })
        this.location = this.table('location')
    }

    // METHOD 
    // Add city in location table
    addLocation(location:Location):Promise<string> {
        // Database.location.add(location)
        return this.location.add(location)
    }

    // Return array of location
    getAllLocations():Promise<Location[]> {
        // city must be one of the attribute of the model
        return this.location.orderBy('city').toArray()
    }
}