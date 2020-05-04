import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasEstoqueComponent } from './bebidas-estoque.component';

describe('BebidasEstoqueComponent', () => {
  let component: BebidasEstoqueComponent;
  let fixture: ComponentFixture<BebidasEstoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebidasEstoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidasEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
