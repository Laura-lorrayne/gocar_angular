import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponenent } from './header.component';

describe('CatalogoComponent', () => {
  let component: HeaderComponenent;
  let fixture: ComponentFixture<HeaderComponenent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponenent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponenent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
