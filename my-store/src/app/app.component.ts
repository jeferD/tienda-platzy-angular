import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Jefer';
  age = 18;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  persona = {
    name:'Fabian',
    age: 24
  }
}


