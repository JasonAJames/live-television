import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-video-1',
  templateUrl: './home-video-1.component.html',
  styleUrls: ['./home-video-1.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class HomeVideo1Component implements OnInit {

  constructor(private router: Router) {
  }

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['home-video-2']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }

  stationName = 'SoCal Television'
  
  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/home-video-1"
  description = 'Highland Park Bowl';
  subdescription = 'We venture throughtout Southern California to bring you the Oldest Bowling Alley in Los Angeles. Highland Park Bowl Est. 1927... We are here to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'


}
