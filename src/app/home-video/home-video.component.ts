import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css']
})


export class HomeVideoComponent implements OnInit {

  constructor(private router: Router) {}

  onend() {
    // do init at here for current route.

    setTimeout(() => {
      this.router.navigate(['home']);
  }, 1000);  //1s
  }

  ngOnInit() {

}

}
