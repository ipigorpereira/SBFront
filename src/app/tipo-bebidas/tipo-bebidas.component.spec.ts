import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBebidasComponent } from './tipo-bebidas.component';

describe('TipoBebidaComponent', () => {
  let component: TipoBebidasComponent;
  let fixture: ComponentFixture<TipoBebidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBebidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
