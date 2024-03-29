import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProfPage } from './nuevo-prof.page';

describe('NuevoProfPage', () => {
  let component: NuevoProfPage;
  let fixture: ComponentFixture<NuevoProfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
