import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdiProfPage } from './edi-prof.page';

describe('EdiProfPage', () => {
  let component: EdiProfPage;
  let fixture: ComponentFixture<EdiProfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EdiProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
