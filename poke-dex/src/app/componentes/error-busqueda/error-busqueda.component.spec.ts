import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBusquedaComponent } from './error-busqueda.component';

describe('ErrorBusquedaComponent', () => {
  let component: ErrorBusquedaComponent;
  let fixture: ComponentFixture<ErrorBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
