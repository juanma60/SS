import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorPosicionComponent } from './indicador-posicion.component';

describe('IndicadorPosicionComponent', () => {
  let component: IndicadorPosicionComponent;
  let fixture: ComponentFixture<IndicadorPosicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicadorPosicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorPosicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
