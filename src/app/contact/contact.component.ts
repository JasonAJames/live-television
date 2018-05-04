import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <p>
  <h2>Contact {{name}}</h2>
  <p>Would you like to have your event showcased live on {{name}}, or do you have a tip on an event or location you would like to see showcased on {{name}}?</p>
  <form>
    <div>
      <label for="first-name">First Name: </label>
      <input type="text" id="first-name" required>
    </div>
    <div>
        <label for="last-name">Last Name: </label>
        <input type="text" id="last-name" required>
      </div>
      <div>
          <label for="email">Email: </label>
          <input type="email" id="email" required>
        </div>
        <div>
            <label for="first-name">First Name: </label>
            <input type="text" id="comment">
          </div>
          <button type="submit">Send</button>
  </form>
</p>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

  name = "SoCal Television"
}
