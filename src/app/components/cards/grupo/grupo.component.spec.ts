import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoComponenent } from './grupo.component';

describe('CatalogoComponent', () => {
  let component: GrupoComponenent;
  let fixture: ComponentFixture<GrupoComponenent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoComponenent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoComponenent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
