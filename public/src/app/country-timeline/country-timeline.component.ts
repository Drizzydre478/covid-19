import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-country-timeline',
  templateUrl: './country-timeline.component.html',
  styleUrls: ['./country-timeline.component.scss']
})
export class CountryTimelineComponent implements OnInit {

  myChart: any;
  constructor(
    private elementRef: ElementRef,
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
        const xLabels = [];
        const yNumbers = [];
        const yDeaths = [];
        const yDeathIncrease = [];
        const yPtIncrease = [];
        chartIt();

        async function chartIt(){
        await getData();
        this.myChart = new Chart("myChart", {
            type: 'line', 
            data: {
                labels: xLabels,
                datasets:[{
                    label:['COVID-19 POSITIVE TEST'],
                    data: yNumbers,
                    fill: true,
                    borderColor:[
                        'rgba(255, 99, 132, 0.6)',
                    ]
                },
                {
                    label: ["COVID-19 DEATHS"], 
                    data: yDeaths,
                    fill: true,
                    borderColor:[
                        'rgba(255, 206, 86, 0.6)',
                    ]
                }]
            },
            options: {
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 18,
                    }
                },
                scales:{
                    xAxes:[{
                        ticks: {
                            fontColor: 'white',
                            fontSize: 18,
                            min: "20200120"
                        },
                        type: "time",
                        display: true,
                        time: {
                            displayFormats: {
                                week: 'MM DD'
                            },
                            
                        }
                    }],
                    yAxes: [{
                        ticks:{
                            fontColor: 'white',
                            fontSize: 18,
                        }
                    }]
                },
                    responsive: false,
                    display: true,
                
                },
        })
    };
    async function getData(){
        const response = await fetch("https://covidtracking.com/api/v1/us/daily.csv");
        const data = await response.text();
        const rows = data.split("\n").slice(1);
        console.log(data)
        rows.forEach(row => {
            const columns = row.split(',');
            const dates = columns[0];
            xLabels.unshift(dates);
            console.log(columns)
            const data = columns[2];
            yNumbers.unshift(data)
            const deathData = columns[14];
            yDeaths.unshift(deathData);
        })
    }
  }
  onClick(){
    this._router.navigate(["/"]);
  }
}