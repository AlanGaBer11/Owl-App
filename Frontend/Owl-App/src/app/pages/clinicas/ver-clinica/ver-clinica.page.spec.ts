import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerClinicaPage } from './ver-clinica.page';

describe('VerClinicaPage', () => {
  let component: VerClinicaPage;
  let fixture: ComponentFixture<VerClinicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerClinicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
