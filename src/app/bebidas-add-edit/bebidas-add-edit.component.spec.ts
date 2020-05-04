import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasAddEditComponent } from './bebidas-add-edit.component';

describe('BebidasAddEditComponent', () => {
  let component: BebidasAddEditComponent;
  let fixture: ComponentFixture<BebidasAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebidasAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidasAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
