import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-video-0',
  templateUrl: './home-video-0.component.html',
  styleUrls: ['./home-video-0.component.css']
})
export class HomeVideo0Component implements OnInit {

  constructor(private router: Router) {}

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['ad1']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }

  stationName = 'SoCal Television';
  description = 'Skyland Ale Works - www.SkylandAleWorks.com';
  subdescription = '1869 Pomona Rd E & F, Corona, CA 92880';

}
