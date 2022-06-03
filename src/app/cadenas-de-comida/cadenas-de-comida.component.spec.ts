import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenasDeComidaComponent } from './cadenas-de-comida.component';

describe('CadenasDeComidaComponent', () => {
  let component: CadenasDeComidaComponent;
  let fixture: ComponentFixture<CadenasDeComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadenasDeComidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadenasDeComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
