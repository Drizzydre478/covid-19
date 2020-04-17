import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-country-timeline',
  templateUrl: './country-timeline.component.html',
  styleUrls: ['./country-timeline.component.scss']
})
export class CountryTimelineComponent implements OnInit {
  usTimeline: any;

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getUSTimeline();
  }

  getUSTimeline(){
    console.log("in Full TimeLine ")
    this._http.getUSTimeline().subscribe(data => {
      console.log(data)
      console.log(data)
      this.usTimeline = data;
    })
  }

  onClick(){
    this._router.navigate(["/"]);
  }
}
