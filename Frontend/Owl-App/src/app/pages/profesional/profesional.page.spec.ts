import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesionalPage } from './profesional.page';

describe('ProfesionalPage', () => {
  let component: ProfesionalPage;
  let fixture: ComponentFixture<ProfesionalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfesionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
