import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-video-0',
  templateUrl: './home-video-0.component.html',
  styleUrls: ['./home-video-0.component.css']
})
export class HomeVideo0Component implements OnInit {

  constructor(private router: Router) {}

  videoEnd0() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      var element = document.getElementById("video_container1");
      var element2 = document.getElementById("video_container2");
    element.classList.add("hideVideo");
    element2.classList.add("showVideo");
     // this.router.navigate(['home-video-1']);
      console.log('Should have redirected by now.');
  }, 1000);  //1s
  }

  ngOnInit() {
  }

}
