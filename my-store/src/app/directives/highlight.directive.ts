import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.color = 'red';
  }
  @HostListener('mouseLEAVE') onMouseLeave(){
    this.element.nativeElement.style.color = '';
  }
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = 'blue';
  }

}
