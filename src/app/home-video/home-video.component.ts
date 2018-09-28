import { Component, OnInit } from '@angular/core';

document.getElementById('myVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        // What you want to do after the event
        window.location.href = "https://socaltelevision.com/#/home";
    }

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css']
})


export class HomeVideoComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

}


