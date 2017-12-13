import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {getElementByCssSelector} from '../../../../common/utils/tests.uril';
import {BarViewComponent} from './bar-view.component';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

describe('BarViewComponent', () => {
  let component: BarViewComponent;
  let fixture: ComponentFixture<BarViewComponent>;
  let activatedRoute: ActivatedRoute;
  const idValue: string = 'hahaha';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BarViewComponent
      ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            params: Observable.of({id: idValue})
          }
        }
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture = TestBed.createComponent(BarViewComponent);
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
    expect(getElementByCssSelector(fixture, '.barView').nativeElement.textContent.trim())
      .toEqual('this is main "bar" view! parameter: ' + idValue);
  }));
});
