import {async, TestBed} from '@angular/core/testing';
import {TestService} from './test-service';

describe('TestService', () => {

  let underTest: TestService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: TestService, useClass: TestService}
      ]
    });
  }));

  beforeEach(() => {
    underTest = TestBed.get(TestService);
  });


  it('should be created', () => {
    // given
    // when
    // then
    expect(underTest).toBeTruthy();
  });

  it('should call getData method and return value', () => {
    // given
    const data = 666;
    underTest.data = data;
    // when
    // then
    expect(underTest.getData()).toEqual(data);
  });
});
