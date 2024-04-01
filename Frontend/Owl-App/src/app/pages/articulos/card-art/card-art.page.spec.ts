import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardArtPage } from './card-art.page';

describe('CardArtPage', () => {
  let component: CardArtPage;
  let fixture: ComponentFixture<CardArtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardArtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
