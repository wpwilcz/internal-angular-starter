import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NotFoundComponent} from './not-found.component';
import {getElementByCssSelector} from '../../common/utils/tests.uril';

describe('AppComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotFoundComponent
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', async(() => {
    // given
    // when
    // then
    expect(component).toBeTruthy();
  }));

  it(`should have content set`, async(() => {
    // given
    // when
    // then
    expect(getElementByCssSelector(fixture, 'p').nativeElement.textContent).toEqual('Error 404!');
  }));
});
