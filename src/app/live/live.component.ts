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
  videoID = "2F2049949125045139";
  videoSrc = 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSoCalTelevision%2Fvideos%2F2052326111474107%2F&width=400';

}
