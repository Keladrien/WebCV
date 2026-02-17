import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accomp } from './accomp';

describe('Accomp', () => {
  let component: Accomp;
  let fixture: ComponentFixture<Accomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
