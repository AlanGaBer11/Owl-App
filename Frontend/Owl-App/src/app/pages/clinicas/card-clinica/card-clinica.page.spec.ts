import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardClinicaPage } from './card-clinica.page';

describe('CardClinicaPage', () => {
  let component: CardClinicaPage;
  let fixture: ComponentFixture<CardClinicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardClinicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
