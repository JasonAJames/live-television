import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nit-wit-ridge',
  templateUrl: './nit-wit-ridge.component.html',
  styleUrls: ['./nit-wit-ridge.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class NitWitRidgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  offlineMessage1 = "SoCal Television - Special Spots"
  subdesc = `Come along with us as we tour Nit Wit Ridge - a house on two and a half acres in Cambria, California, United States. Artist/recluse Arthur "Art" Harold Beal bought his hillside lot in 1928 and spent most of the next 50 years carving out the terraces with only a pick and shovel, creating his own "castle on a hill" `


  stationName = 'SoCal Television'
    
  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Nit Wit Ridge"
  url = "https://www.socaltelevision.com/+#+/nit-wit-ridge"
  summary = `Come along with us as we tour Nit Wit Ridge - a house on two and a half acres in Cambria, California, United States. Artist/recluse Arthur "Art" Harold Beal bought his hillside lot in 1928 and spent most of the next 50 years carving out the terraces with only a pick and shovel, creating his own "castle on a hill" `
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

  description = this.offlineMessage1
  subdescription = this.subdesc

}
