import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges {
  @Input() img: string = 'Valor Inicial'
  @Output() loaded = new EventEmitter<string>()
  // imageDefault = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZJ8iFDOVFhpUHBTLskFlRewlGW3RICzOgzVyf67sVgff6YtefMHNB0IaepRRO3f6IZg&usqp=CAU'
  // imageDefault = 'https://source.unsplash.com/random'
  imageDefault: string = '';
  constructor(){
    // before render
    console.log('constructor')
  }

  ngOnInit(): void{
    //aqui se puede hacer un async - fetch, solo se corre una vez,
    // 
    this.imageDefault = 'https://source.unsplash.com/random';
  }

  ngOnChanges(){
    // cambios en los inputs
    // cada vez que se actualize el input

  }

  ngAfterViewInit(){
    //after render 
    //handler correo los hijos, 
  }

  ngOnDestroy(){
    //elimina un componente
  }

  imgError(){
    this.img = this.imageDefault
  }
  imgLoaded(){
    console.log('Desde el hijo')
    this.loaded.emit(this.img) //emitir que cargo correctamente al padre
  }
}
