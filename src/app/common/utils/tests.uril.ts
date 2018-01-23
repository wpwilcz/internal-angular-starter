import {ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

export function getElementByCssSelector(fixture: ComponentFixture<any>, selector: string) {
  return fixture.debugElement.query(By.css(selector));
}
