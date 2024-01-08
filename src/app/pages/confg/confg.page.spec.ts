import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfgPage } from './confg.page';

describe('ConfgPage', () => {
  let component: ConfgPage;
  let fixture: ComponentFixture<ConfgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
