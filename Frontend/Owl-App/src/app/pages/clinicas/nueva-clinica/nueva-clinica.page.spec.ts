import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaClinicaPage } from './nueva-clinica.page';

describe('NuevaClinicaPage', () => {
  let component: NuevaClinicaPage;
  let fixture: ComponentFixture<NuevaClinicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaClinicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
