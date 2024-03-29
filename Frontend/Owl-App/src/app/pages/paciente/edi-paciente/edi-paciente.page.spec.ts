import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdiPacientePage } from './edi-paciente.page';

describe('EdiPacientePage', () => {
  let component: EdiPacientePage;
  let fixture: ComponentFixture<EdiPacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EdiPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
