import { Component } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Interested in Subscribing to SoCalTelevision', 'Interested in having SoCalTelevision showcase an event',
            'Interested in Advertising on SoCalTelevision', 'Interested in an internship with SoCalTelevision'];

  model = new Hero(18, '', this.powers[0], '');

  email = '';

  newHero() {
    this.model = new Hero(42, '', '','');
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}