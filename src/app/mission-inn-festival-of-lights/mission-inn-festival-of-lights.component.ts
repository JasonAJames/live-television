import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-inn-festival-of-lights',
  templateUrl: './mission-inn-festival-of-lights.component.html',
  styleUrls: ['./mission-inn-festival-of-lights.component.css', '../../assets/css/social-share.css']
})
export class MissionInnFestivalOfLightsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "SoCalTelevision"
  title = "26TH ANNUAL FESTIVAL OF LIGHTS SWITCH-ON CEREMONY"
  url = "https://www.socaltelevision.com/+#+/mission-inn-festival-of-lights"
  description = "Join us on Friday, November 23rd at 4:30PM as we officially kick off the holiday season with our 26th Annual Festival of Lights celebration!"
  subdescription = "You're not going to want to miss this very special annivesary celebration featuring guests like Robin Thicke!! If you can't make it to the celebration, We've got you covered. Watch the Switch On Ceremony #LIVE on www.SoCalTelevision.com"

}
