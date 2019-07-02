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
  stationName = "It's Taco Tuesday at Niko Y Pop's Tacos"
  description = "Niko's Y Pops Tacos"
  subdescription = "Located inside Mr. G's Market in Corona, Nikos Y Pops Tacos is open at 11am daily, offering authentic fresh Mexican Cuisine that will leave you coming back for more! Listen to the locals and Try Niko's Y Pop's Tacos Today!!! Visit Niko Y Pop's Tacos at 1411 Rimpau Ave #101, Corona CA (Inside Mr. G's Market)"
}
