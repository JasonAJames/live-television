import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations-main',
  templateUrl: '../stations-main/stations-main.component.html',
  styleUrls: ['../stations-main/stations-main.component.css']
})
export class StationsMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'SoCalTelevision'
  source = 'https://livestream.com/accounts/9262780/events/3189705/player?width=770&height=433&autoPlay=true&mute=false&customAdTagParameters=Site%3D41641936%26pid%3Don-airlive-streaming'
  
  stationName = 'KTLA 5'
  tv = 'Television Stations'
  tvhref = 'tv-stations'

}
