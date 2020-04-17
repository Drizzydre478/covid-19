import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-united-states',
  templateUrl: './united-states.component.html',
  styleUrls: ['./united-states.component.scss']
})
export class UnitedStatesComponent implements OnInit {
  unitedStatesData: any;
  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getUSData();
  }

  getUSData(){
    this._http.getUnitedStatesData().subscribe(data => {
      console.log(data)
      console.log(data)
      this.unitedStatesData = data;
    })
  }

  onClick(){
    this._router.navigate(["/"]);
  }
}
