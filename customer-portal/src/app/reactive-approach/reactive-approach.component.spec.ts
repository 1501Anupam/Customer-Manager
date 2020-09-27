import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveApproachComponent } from './reactive-approach.component';

describe('ReactiveApproachComponent', () => {
  let component: ReactiveApproachComponent;
  let fixture: ComponentFixture<ReactiveApproachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveApproachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
