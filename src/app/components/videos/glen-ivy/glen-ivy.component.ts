import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-glen-ivy',
  templateUrl: './glen-ivy.component.html',
  styleUrls: ['./glen-ivy.component.css']
})
export class GlenIvyComponent implements OnInit {

  constructor(private router: Router) {
  }

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

}
