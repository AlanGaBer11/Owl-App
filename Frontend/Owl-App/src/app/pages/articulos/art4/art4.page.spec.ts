import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Art4Page } from './art4.page';

describe('Art4Page', () => {
  let component: Art4Page;
  let fixture: ComponentFixture<Art4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Art4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
