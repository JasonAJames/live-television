import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css']
})


export class HomeVideoComponent implements OnInit {

  currentvideo = `
  <video controls poster="http://thenewcode.com/assets/images/vid-glacier.jpg" playsinline>
  <source src="https://s3-us-west-2.amazonaws.com/jppmsolutions/Videos/CajalcoLabyrinth_CoronaCalifornia.mp4.mp4" type="video/mp4">
  <source src="https://s3-us-west-2.amazonaws.com/jppmsolutions/Videos/CajalcoLabyrinth_CoronaCalifornia.webmhd.webm" type="video/webm">
</video>
  `

  constructor() { }

  ngOnInit() {
  }

}


