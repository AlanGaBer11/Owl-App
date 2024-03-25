import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerPacientePage } from './ver-paciente.page';

describe('VerPacientePage', () => {
  let component: VerPacientePage;
  let fixture: ComponentFixture<VerPacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
