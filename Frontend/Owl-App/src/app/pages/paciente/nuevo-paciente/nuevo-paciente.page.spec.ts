import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoPacientePage } from './nuevo-paciente.page';

describe('NuevoPacientePage', () => {
  let component: NuevoPacientePage;
  let fixture: ComponentFixture<NuevoPacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
