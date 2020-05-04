import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavFixedExampleComponent } from './sidenav-fixed-example.component';

describe('SidenavFixedExampleComponent', () => {
  let component: SidenavFixedExampleComponent;
  let fixture: ComponentFixture<SidenavFixedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavFixedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavFixedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
