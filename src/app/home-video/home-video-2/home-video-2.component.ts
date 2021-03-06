import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-video-2',
  templateUrl: './home-video-2.component.html',
  styleUrls: ['./home-video-2.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class HomeVideo2Component implements OnInit {

  constructor(private router: Router) {
  }

  

  videoEnd() {
    // do init at here for current route.

   // this.router

    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['stations-main']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }

  stationName = 'SoCal Television'
    
  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots visits Krispy Kreme Doughnuts"
  url = "https://www.socaltelevision.com/+#+/home-video-2"
  description = 'Special Spots';
  subdescription = 'We ventured throughtout Southern California and came upon Krispy Kreme Reeces Peanut Butter Doughnuts... Here for a Limited Time! Get them while they are hot!'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
