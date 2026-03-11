import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frete } from './frete';

describe('Frete', () => {
  let component: Frete;
  let fixture: ComponentFixture<Frete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Frete],
    }).compileComponents();

    fixture = TestBed.createComponent(Frete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
