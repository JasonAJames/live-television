import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad1',
  templateUrl: './ad1.component.html',
  styleUrls: ['./ad1.component.css']
})
export class Ad1Component implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['home-video-1']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  stationName = 'SoCal Television - YES on Prop 8';
  description = 'VOTE YES on Proposition 8';
  subdescription = 'Vote with the Patients... Not the Clinics! VOTE YES on 8!';

}
