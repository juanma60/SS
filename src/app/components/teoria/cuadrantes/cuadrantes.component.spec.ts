import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrantesComponent } from './cuadrantes.component';

describe('CuadrantesComponent', () => {
  let component: CuadrantesComponent;
  let fixture: ComponentFixture<CuadrantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadrantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
