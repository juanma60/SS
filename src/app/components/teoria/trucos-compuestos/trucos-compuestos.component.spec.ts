import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucosCompuestosComponent } from './trucos-compuestos.component';

describe('TrucosCompuestosComponent', () => {
  let component: TrucosCompuestosComponent;
  let fixture: ComponentFixture<TrucosCompuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrucosCompuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucosCompuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
