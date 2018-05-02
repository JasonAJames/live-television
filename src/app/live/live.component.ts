import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css', '../app.component.css']
})
export class LiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = 'SoCal Television LIVE';
  description = "Man reportedly barricaded in La Crescenta home. Suspect was previously sentenced to five years probation for stalking actress Sandra Bullock, according to TMZ."
  videoUrl = "https://www.facebook.com/fox11la/videos/10160446573060553/"
}
