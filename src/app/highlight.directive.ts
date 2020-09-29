import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(ele:ElementRef) {  
  console.log("test")
    ele.nativeElement.style.backgroundColor="red"

  }

}
