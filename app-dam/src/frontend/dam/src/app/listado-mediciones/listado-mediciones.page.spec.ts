import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoMedicionesPage } from './listado-mediciones.page';

describe('ListadoMedicionesPage', () => {
  let component: ListadoMedicionesPage;
  let fixture: ComponentFixture<ListadoMedicionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMedicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
