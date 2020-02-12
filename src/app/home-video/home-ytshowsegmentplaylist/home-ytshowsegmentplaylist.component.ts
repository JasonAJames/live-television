import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-ytshowsegmentplaylist',
  templateUrl: './home-ytshowsegmentplaylist.component.html',
  styleUrls: ['./home-ytshowsegmentplaylist.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class HomeYtshowsegmentplaylistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = "SoCal Television"
  description = ""
  subdescription = ""

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "SoCal Television"
  url = "https://www.socaltelevision.com/+#+/home-video-0"
  summary = this.subdescription
  source_url = this.url
  subject = this.header_link
  body = this.subdescription

}
