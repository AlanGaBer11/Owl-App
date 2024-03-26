import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Art1Page } from './art1.page';

describe('Art1Page', () => {
  let component: Art1Page;
  let fixture: ComponentFixture<Art1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Art1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
