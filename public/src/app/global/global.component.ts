import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
  globalData: any;
  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getGlobalData();
  }

  getGlobalData(){
    this._http.getGlobalData().subscribe(data => {
      console.log(data)
      console.log(data)
      this.globalData = data;
      console.log(this.globalData.results[0].total_cases)
    })
  }

  onClick(){
    this._router.navigate(["/"]);
  }
}
