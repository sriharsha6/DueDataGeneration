import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OncompletionofComponent } from './oncompletionof.component';

describe('OncompletionofComponent', () => {
  let component: OncompletionofComponent;
  let fixture: ComponentFixture<OncompletionofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncompletionofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OncompletionofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
