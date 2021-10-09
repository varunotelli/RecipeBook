import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') mouseclick(event:Event){
  	this.isOpen = !this.isOpen;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) { 
  }

}
