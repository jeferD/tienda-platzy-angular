import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // css del componente, se llama igual que el html menos el .ts
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

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.persona.age +=1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log('element: ', element.scrollTop);
      
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    console.log('element: ', element.value);
    this.persona.name = element.value;

  }
}


