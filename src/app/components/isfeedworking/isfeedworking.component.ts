import { Component, Input, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-isfeedworking',
  templateUrl: './isfeedworking.component.html',
  styleUrls: ['./isfeedworking.component.css']
})
export class IsfeedworkingComponent implements OnInit {

  route: string;
  local: string;


public FeedWorkingResponse: string = "";

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();

       // console.log("the route is: " + this.route); 
    
      } 
    });
  }

  YesFeedWorks() {
    this.local = this.route;
    console.log("The feed at " + this.local + " is WORKING! YAH!!!");
    this.FeedWorkingResponse = "Thank You for your continued Viewership and Support!";
  }

  FeedNotWorking() {
    this.local = this.route;
    console.log("The Feed at " + this.local + " has been reported not to work. PLEASE CHECK " + this.local );
    this.FeedWorkingResponse = "Thank You for letting us know. We will get right on it. Please check back again soon! Thank you for watching!";
  }




  ngOnInit() {

  }

}
