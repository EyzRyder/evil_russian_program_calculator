import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcPage } from './calc.page';

describe('CalcPage', () => {
  let component: CalcPage;
  let fixture: ComponentFixture<CalcPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
