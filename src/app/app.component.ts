import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  public customTitle = 'My custom header';
  public displayAlert: boolean;

  public onBuy($event) {
    this.displayAlert = $event;
  }
}
