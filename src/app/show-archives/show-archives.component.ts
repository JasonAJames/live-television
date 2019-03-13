import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-archives',
  templateUrl: './show-archives.component.html',
  styleUrls: ['./show-archives.component.css']
})
export class ShowArchivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show0_title = "Skyland Ale Works";
  show0_url = "https://s3-us-west-2.amazonaws.com/jppmsolutions/Videos/SkylandAleWorks/SkylandAleWorks_Final_v1.mp4";
  show1_title = "SBD Fest 2018";
  show1_url = "https://s3-us-west-2.amazonaws.com/jppmsolutions/Videos/sbd-air-fest-2018/SBDfest_2018_wCredits_FINAL.mp4";
  show2_title = "Mission Inn Festival of Lights Switch On Ceremony featuring Robin Thicke";
  show2_url = "https://s3-us-west-2.amazonaws.com/jppmsolutions/Videos/MissionInnFestivalOfLightsCeremony_RobinThicke/MissionInn_SwitchonCeremony_featuringRobinThicke.mp4";
  show3_title = "Cinnaholic Grand Opening at Corona Crossings";
  show3_url = "https://s3-us-west-2.amazonaws.com/socaltelevision/Cinnaholic/GrandOpening_CinnoholicFULL.mp4";
  show4_title = "Salvation Mountain";
  show4_url = "https://s3-us-west-2.amazonaws.com/jppmsolutions/Videos/SalvationMountain_Complete.mp4.mp4";

}
