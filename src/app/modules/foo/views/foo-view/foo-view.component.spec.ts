import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {getElementByCssSelector} from '../../../../common/utils/tests.uril';
import {FooViewComponent} from './foo-view.component';
import {TestService} from '../../../../common/services/test-service/test-service';
import {TestServiceStub} from '../../../../common/stubs/test-service.stub';

describe('FooViewComponent', () => {
  let component: FooViewComponent;
  let fixture: ComponentFixture<FooViewComponent>;
  let testService: TestService;
  let testServiceGetDataSpy;
  const serviceDataValue: number = 666;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooViewComponent
      ],
      providers: [
        {provide: TestService, useClass: TestServiceStub}
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    testService = TestBed.get(TestService);
    testServiceGetDataSpy = jest.spyOn(testService, 'getData').mockImplementation(() => serviceDataValue);
    fixture = TestBed.createComponent(FooViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', async(() => {
    // given
    // when
    // then
    expect(component).toBeTruthy();
  }));

  it(`should get data from service`, async(() => {
    expect(testServiceGetDataSpy).toHaveBeenCalled();
    expect(component.data).toEqual(serviceDataValue);
  }));

  it(`should have content set`, async(() => {
    // given
    // when
    // then
    expect(getElementByCssSelector(fixture, '.fooView').nativeElement.textContent.trim())
      .toEqual('this is main "foo" view! data from service: ' + serviceDataValue);
  }));
});
