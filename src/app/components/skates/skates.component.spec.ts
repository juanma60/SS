import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkatesComponent } from './skates.component';

describe('SkatesComponent', () => {
  let component: SkatesComponent;
  let fixture: ComponentFixture<SkatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
