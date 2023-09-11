import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective {
  // reference: https://nightwolf.dev/autofocus-on-angular-form-field/
  constructor(private element: ElementRef<HTMLInputElement>) {}

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }
}
