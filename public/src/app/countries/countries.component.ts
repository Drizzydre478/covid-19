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
  data1: any;
  data2: any;
  data3: any;
  countries: any;

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
      this.data1 = Object.values(data)
      this.data2 = this.data1[1]
      this.data3 = this.data2[0]
      this.countriesData = Object.values(this.data3)
      this.countries = this.countriesData.sort((a,b) => {
        if (a.title < b.title) return -1
        return a.title > b.title ? 1 : 0
      })
    })
}

  onClick(){
    this._router.navigate(["/"]);
  }
}
