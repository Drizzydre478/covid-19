import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
  statesData: any;
  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getStatesData();
  }

  getStatesData(){
    this._http.getStatesData().subscribe(data => {
      console.log(data)
      this.statesData = data;
    })
  }

  onClick(){
    this._router.navigate(["/"]);
  }
}
