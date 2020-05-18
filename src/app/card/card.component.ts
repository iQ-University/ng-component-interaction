import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class CardComponent {

  constructor() { }

  private _title: string;

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
  @Input() public set title(newValue) {
    newValue = 'another value';
    this._title = newValue;
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  public get title() {
    // custom code
    return this._title;
  }
  // https://ultimatecourses.com/blog/component-events-event-emitter-output-angular-2
  @Output() public bought = new EventEmitter<boolean>();

  public buy() {
    this.bought.emit(true);
  }

  // Input
  // Output
  // Reactive programming
  // https://www.google.com/search?q=reactive+programming&oq=reactive+programming&aqs=chrome.0.0l7j69i65.3240j0j1&sourceid=chrome&ie=UTF-8
  // https://en.wikipedia.org/wiki/Reactive_programming
}
