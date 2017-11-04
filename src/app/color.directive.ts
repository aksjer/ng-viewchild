import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('class.bgclr') status = false;

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mouseenter')
  changeColor() {
    this.el.nativeElement.style.color = 'red';
    this.toggle();
  }

  @HostListener('mouseleave')
  color() {
    this.el.nativeElement.style.color = 'initial';
    this.toggle();
  }

  toggle() {
    this.status = !this.status;
  }


}
