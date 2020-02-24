import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kobe-bryant-memorial',
  templateUrl: './kobe-bryant-memorial.component.html',
  styleUrls: ['./kobe-bryant-memorial.component.css']
})
export class KobeBryantMemorialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = "SoCal Television - A Celebration of Life"
  description = "#LIVE - Remembering Los Angeles Lakers legend Kobe Bryant and his daughter Gianna on SoCal Television"
  subdescription = "A Celebration of Life!"

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "SoCal Television"
  url = "https://www.socaltelevision.com/+#+/kobe-bryant-memorial"
  summary = this.subdescription
  source_url = this.url
  subject = this.header_link
  body = this.subdescription

}
