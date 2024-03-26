import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Art5Page } from './art5.page';

describe('Art5Page', () => {
  let component: Art5Page;
  let fixture: ComponentFixture<Art5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Art5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
