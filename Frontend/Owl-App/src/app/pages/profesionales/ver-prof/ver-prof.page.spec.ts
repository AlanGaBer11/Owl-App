import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerProfPage } from './ver-prof.page';

describe('VerProfPage', () => {
  let component: VerProfPage;
  let fixture: ComponentFixture<VerProfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
