import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css']
})


export class HomeVideoComponent implements OnInit {

  v1_root = "https://s3-us-west-2.amazonaws.com/jppmsolutions/Videos/CajalcoLabyrinth_CoronaCalifornia";

  constructor() { }

  ngOnInit() {
  }

}


