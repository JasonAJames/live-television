import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css']
})


export class HomeVideoComponent implements OnInit {
  poster1 = '"http://thenewcode.com/assets/images/vid-glacier.jpg"'

  constructor() { }

  ngOnInit() {
  }

}


