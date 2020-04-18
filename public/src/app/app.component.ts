import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tracking Covid-19';

  constructor(@Inject(DOCUMENT) document) {}

  ngOnInit() {}

@HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
      if (window.pageYOffset > 100) {
        let element = document.getElementsByClassName('header') as HTMLCollectionOf<HTMLElement>;
          for(let i in element){
            element[i].style.backgroundColor = "rgb(88, 88, 88)";
          }
      }
      else {
        let element = document.getElementsByClassName('header') as HTMLCollectionOf<HTMLElement>;
        for(let i in element){
          element[i].style.backgroundColor = "rgba(0, 0, 28, 0.509)";
        }
      }
    }
}