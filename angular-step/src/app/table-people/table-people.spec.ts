import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePeople } from './table-people';

describe('TablePeople', () => {
  let component: TablePeople;
  let fixture: ComponentFixture<TablePeople>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePeople],
    }).compileComponents();

    fixture = TestBed.createComponent(TablePeople);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
