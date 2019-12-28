import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartlyComponent } from './quartly.component';

describe('QuartlyComponent', () => {
  let component: QuartlyComponent;
  let fixture: ComponentFixture<QuartlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
