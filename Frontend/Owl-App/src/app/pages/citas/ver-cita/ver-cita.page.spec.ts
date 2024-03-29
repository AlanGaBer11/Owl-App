import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerCitaPage } from './ver-cita.page';

describe('VerCitaPage', () => {
  let component: VerCitaPage;
  let fixture: ComponentFixture<VerCitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
