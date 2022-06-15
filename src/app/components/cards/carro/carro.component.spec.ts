import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarroComponenent } from './carro.component';

describe('CatalogoComponent', () => {
  let component: CardCarroComponenent;
  let fixture: ComponentFixture<CardCarroComponenent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCarroComponenent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCarroComponenent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
