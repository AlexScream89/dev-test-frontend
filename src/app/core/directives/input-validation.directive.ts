import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputValidation]'
})
export class InputValidationDirective {

  @Input() control;

  constructor(private el: ElementRef) {}

  @HostListener('blur') OnBlur() {
    if (this.control.touched && this.control.invalid) {
      this.el.nativeElement.classList.add('invalid');
    }
  }

  @HostListener('keyup') OnKeyUp() {
    if (this.control.touched && this.control.invalid) {
      this.el.nativeElement.classList.add('invalid');
    } else {
      this.el.nativeElement.classList.remove('invalid');
    }
  }

}
