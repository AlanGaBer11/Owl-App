import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Art3Page } from './art3.page';

describe('Art3Page', () => {
  let component: Art3Page;
  let fixture: ComponentFixture<Art3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Art3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
