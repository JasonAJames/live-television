import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fox5sandiego',
  templateUrl: './fox5sandiego.component.html',
  styleUrls: ['./fox5sandiego.component.css', '../../../app.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class Fox5sandiegoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = "FOX 5 San Diego";
  description = "FOX 5 San Diego";
  subdescription = `The station first signed on the air on October 1, 1984 as KTTY. The station originally 
  operated from studios located on Frontage Road in Chula Vista. Originally locally owned by San Diego 
  Television, it operated as an independent station; it maintained a general entertainment format featuring 
  a mix of dramas, classic movies, cartoons and religious programming that the other stations in the market 
  declined to air. KTTY also aired a significant amount of paid programming. The station suffered from low 
  ratings throughout its run as an independent station, struggling to compete with established independents 
  XETV-TV (channel 6) and KUSI-TV (channel 51). On January 11, 1995, KTTY became the San Diego charter affiliate 
  of The WB, an upstart broadcast network that was majority owned by the Warner Bros. Entertainment division of Time Warner.

  The station fell into bankruptcy, and Tribune Broadcasting, whose corporate parent—the Tribune Company—owned the remaining 
  stake in The WB that Time Warner did not maintain, purchased the station at a bankruptcy auction in 1995, and took control 
  of it in 1996; on August 16 of that year, the company changed the station's call letters to KSWB-TV (for "San Diego's WB," 
  which served as the station's slogan for most of its tenure with The WB). After Tribune took ownership of channel 69, the 
  station added many off-network sitcoms to its schedule, with talk and court shows being mixed in as well throughout the 
  remainder of the 1990s.`
}
