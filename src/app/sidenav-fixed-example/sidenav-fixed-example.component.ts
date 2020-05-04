
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

/** @title Fixed sidenav */
@Component({
  selector: 'app-sidenav-fixed-example',
  templateUrl: 'sidenav-fixed-example.component.html',
  styleUrls: ['sidenav-fixed-example.component.scss'],
})
export class SidenavFixedExampleComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  shouldRun = false;
}
