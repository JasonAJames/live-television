import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-niko-y-pops-tacos',
  templateUrl: './niko-y-pops-tacos.component.html',
  styleUrls: ['./niko-y-pops-tacos.component.css','../../../../components/social-share-icons/social-share-icons.component.css']
})
export class NikoYPopsTacosComponent implements OnInit {

  constructor(private router: Router) {
  }

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['stations-main']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }
  stationName = "Grand Opening: Taco Tuesday at Niko Y Pop's Tacos"
  description = "Niko Y Pop's Tacos"
  subdescription = "Located inside Mr. G's Market in Corona, Niko Y Pop's Tacos is open daily at 11am, offering authentic fresh Mexican Cuisine that will leave you coming back for more! Listen to the locals, and Try Niko Y Pop's Tacos Today!!! Visit Niko Y Pop's Tacos, located at 1411 Rimpau Ave #101, Corona CA (Inside Mr. G's Market)"

  // Social Sharing binding data
  title = "GrandOpening: Niko Y Pop's Tacos"
  header_link = "GrandOpening: Niko Y Pop's Tacos"
  url = "https://www.socaltelevision.com/+#+/mr-g-market/niko-y-pops-tacos"
  summary = this.subdescription
  source_url = this.url
  subject = this.header_link
  body = this.subdescription

}
