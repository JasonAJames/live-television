import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hawaii-news-now',
  templateUrl: './hawaii-news-now.component.html',
  styleUrls: ['./hawaii-news-now.component.css', '../../../app.component.css']
})
export class HawaiiNewsNowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = 'Hawaii News Now'
}
