import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionTrucoComponent } from './seleccion-truco.component';

describe('SeleccionTrucoComponent', () => {
  let component: SeleccionTrucoComponent;
  let fixture: ComponentFixture<SeleccionTrucoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionTrucoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionTrucoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
