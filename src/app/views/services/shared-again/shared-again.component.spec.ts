import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAgainComponent } from './shared-again.component';

describe('SharedAgainComponent', () => {
  let component: SharedAgainComponent;
  let fixture: ComponentFixture<SharedAgainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedAgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
