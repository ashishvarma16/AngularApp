import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getuser } from './getuser';

describe('Getuser', () => {
  let component: Getuser;
  let fixture: ComponentFixture<Getuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getuser],
    }).compileComponents();

    fixture = TestBed.createComponent(Getuser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
