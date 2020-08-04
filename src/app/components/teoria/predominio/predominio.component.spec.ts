import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredominioComponent } from './predominio.component';

describe('PredominioComponent', () => {
  let component: PredominioComponent;
  let fixture: ComponentFixture<PredominioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredominioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredominioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
