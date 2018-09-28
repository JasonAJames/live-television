import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-video-1',
  templateUrl: './home-video-1.component.html',
  styleUrls: ['./home-video-1.component.css']
})
export class HomeVideo1Component implements OnInit {

  constructor(private router: Router) {}

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['home-video-0']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }

  stationName = 'SoCal Television';
  description = 'The Thunderbirds';
  subdescription = 'The Sky thunders with the Thunderbirds flying by March Airforce Base, CA';

}
