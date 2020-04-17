import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }
  getGlobalData(){
    return this._http.get("https://api.thevirustracker.com/free-api?global=stats")
  }

  getCountriesData(){
    return this._http.get("https://api.thevirustracker.com/free-api?countryTotals=ALL")
  }

  getUnitedStatesData(){
    return this._http.get("https://api.thevirustracker.com/free-api?countryTotal=US")
  }

  getStatesData(){
    return this._http.get("https://covidtracking.com/api/states")
  }

  getUSTimeline(){
    return this._http.get("https://covidtracking.com/api/us/daily")
  }
}
