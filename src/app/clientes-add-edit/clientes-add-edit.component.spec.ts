import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAddEditComponent } from './clientes-add-edit.component';

describe('ClientesAddEditComponent', () => {
  let component: ClientesAddEditComponent;
  let fixture: ComponentFixture<ClientesAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
