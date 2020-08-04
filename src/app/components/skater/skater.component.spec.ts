import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkaterComponent } from './skater.component';

describe('SkaterComponent', () => {
  let component: SkaterComponent;
  let fixture: ComponentFixture<SkaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
