import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoBebidaService } from '../services/tipo-bebida.service';
import { TipoBebida } from '../models/tipobebida';

@Component({
  selector: 'app-tipo-bebidas-add-edit',
  templateUrl: './tipo-bebidas-add-edit.component.html',
  styleUrls: ['./tipo-bebidas-add-edit.component.scss']
})
export class TipoBebidasAddEditComponent implements OnInit {

  form: FormGroup;
  actionType: string;
  formNome: string;
  tipoBebidaId: string;
  errorMessage: any;
  tipoBebidaExistente: TipoBebida;

  constructor(private tipoBebidaService: TipoBebidaService, private formBuilder: FormBuilder,
    private avRoute: ActivatedRoute,
    private router: Router
  ) {

    const idParam = 'id';
    this.actionType = 'Add';
    this.formNome = 'tipo';




    if (this.avRoute.snapshot.params[idParam]) {
      this.tipoBebidaId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        tipo: ['', [Validators.required]],

      }
    )

  }

  ngOnInit() {
    if (this.tipoBebidaId != null) {
      this.actionType = 'Edit';
      this.tipoBebidaService.getTipoBebida(this.tipoBebidaId)
        .subscribe(data => (
          this.tipoBebidaExistente = data,

          this.form.controls['tipo'].setValue(this.tipoBebidaExistente.tipo)
        ));

    }
  }


  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let tipoBebida: TipoBebida = {
        tipo: this.form.get('tipo').value

      };

      this.tipoBebidaService.saveTipoBebida(tipoBebida)
        .subscribe((data) => {
          this.router.navigate(['/tipobebidas/lista']);
        });
    }

    if (this.actionType === 'Edit') {
      let tipoBebida: TipoBebida = {
        tipoBebidaId: this.tipoBebidaExistente.tipoBebidaId,
        tipo: this.form.get('tipo').value

      };
      this.tipoBebidaService.updateTipoBebida(tipoBebida)
        .subscribe((data) => {
          this.router.navigate(['/tipobebidas/lista']);
        });
    }

  }

  cancel() {
    this.router.navigate(['/tipobebidas/lista']);
  }

}
