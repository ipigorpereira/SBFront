import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasAddEditComponent } from './vendas-add-edit.component';

describe('VendasAddEditComponent', () => {
  let component: VendasAddEditComponent;
  let fixture: ComponentFixture<VendasAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
