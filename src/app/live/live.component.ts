import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = 'SoCal Television LIVE';
  videoID = '2F2049949125045139';
  videoSRC = 'https://www.facebook.com/SoCalTelevision/videos/2052326111474107/';

}
