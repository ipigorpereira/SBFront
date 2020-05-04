import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBebidasAddEditComponent } from './tipo-bebidas-add-edit.component';

describe('TipoBebidasAddEditComponent', () => {
  let component: TipoBebidasAddEditComponent;
  let fixture: ComponentFixture<TipoBebidasAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBebidasAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBebidasAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
