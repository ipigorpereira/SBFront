import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasAddEditComponent } from './marcas-add-edit.component';

describe('MarcasAddEditComponent', () => {
  let component: MarcasAddEditComponent;
  let fixture: ComponentFixture<MarcasAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
