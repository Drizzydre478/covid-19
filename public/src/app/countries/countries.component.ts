import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countriesData: any

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getCountriesData();
  }

  getCountriesData(){
    this._http.getCountriesData().subscribe(data => {
      console.log(data)
      this.countriesData = data
    })
  }

  onClick(){
    this._router.navigate(["/countries"]);
  }
}
