import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAuMask]'
})
export class AuMaskDirective {
  input: HTMLInputElement;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode) {
    $event.preventDefault();
    const key = String.fromCharCode(keyCode);

    if (keyCode === 37) {
      this.input.selectionStart = this.input.selectionStart - 1;
      this.input.selectionEnd = this.input.selectionStart;
    }

    if (keyCode === 39) {
      this.input.selectionStart = this.input.selectionStart + 1;
      this.input.selectionEnd = this.input.selectionStart;
    }

    if (keyCode === 8) {
      const cursorPos = this.input.selectionStart;
      const currentValue = this.input.value;
      this.input.value = currentValue.slice(0, cursorPos - 1) + currentValue.slice(cursorPos);
      this.input.selectionStart = cursorPos - 1;
      this.input.selectionEnd = cursorPos - 1;
    }

    if (keyCode === 46) {
      const cursorPos = this.input.selectionStart;
      const currentValue = this.input.value;
      this.input.value = currentValue.slice(0, cursorPos) + currentValue.slice(cursorPos + 1);
      this.input.selectionStart = cursorPos;
      this.input.selectionEnd = cursorPos;
    }

    if (
      !isNaN(+key)
      && keyCode !== 32
    ) {
      const cursorPos = this.input.selectionStart;
      const currentValue = this.input.value;
      const newInputValue = currentValue.slice(0, cursorPos) + key + currentValue.slice(cursorPos);

      if ((+newInputValue > 0) && (+newInputValue <= 31)) {
        this.input.value = newInputValue;
        this.input.selectionStart = cursorPos + 1;
        this.input.selectionEnd = cursorPos + 1;
      }
    }
  }
}
