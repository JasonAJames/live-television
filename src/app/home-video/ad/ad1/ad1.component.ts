import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad1',
  templateUrl: './ad1.component.html',
  styleUrls: ['./ad1.component.css','../../../components/social-share-icons/social-share-icons.component.css']
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

  stationName = 'SoCal Television'
    
  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/ad1"
  description = 'Special Spots';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
