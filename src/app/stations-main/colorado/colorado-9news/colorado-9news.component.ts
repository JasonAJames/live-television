import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorado-9news',
  templateUrl: './colorado-9news.component.html',
  styleUrls: ['./colorado-9news.component.css']
})
export class Colorado9newsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  state = "Colorado"
  stationName1 = "9 News"
  stationLink1 = "colorado-9news"
}
