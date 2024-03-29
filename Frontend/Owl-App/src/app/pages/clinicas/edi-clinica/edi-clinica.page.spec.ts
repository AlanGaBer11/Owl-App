import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdiClinicaPage } from './edi-clinica.page';

describe('EdiClinicaPage', () => {
  let component: EdiClinicaPage;
  let fixture: ComponentFixture<EdiClinicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EdiClinicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
