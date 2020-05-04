import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoBebidaService } from '../services/tipo-bebida.service';
import { MarcaService } from '../services/marca.service';
import { BebidaService } from '../services/bebida.service';
import { Bebida } from '../models/bebida';
import { TipoBebida } from '../models/tipobebida';
import { Marca } from '../models/marca';

@Component({
  selector: 'app-bebidas-add-edit',
  templateUrl: './bebidas-add-edit.component.html',
  styleUrls: ['./bebidas-add-edit.component.scss']
})
export class BebidasAddEditComponent implements OnInit {

  tipoBebidas$: Observable<TipoBebida[]>;
  marcas$: Observable<Marca[]>;
  form: FormGroup;
  actionType: string;
  formNome: string;
  formCpf: string;
  formEndereco: string;
  bebidaId: string;
  errorMessage: any;
  bebidaExistente: Bebida;

  constructor(private bebidaService: BebidaService,
    private marcaService: MarcaService,
    private tipoBebidaService: TipoBebidaService,
    private formBuilder: FormBuilder,
    private avRoute: ActivatedRoute,
    private router: Router
  ) {

    const idParam = 'id';
    this.actionType = 'Add';
    this.formNome = 'nome';
    this.formCpf = 'CPF';
    this.formEndereco = 'Endereco';




    if (this.avRoute.snapshot.params[idParam]) {
      this.bebidaId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        marcaId: ['', [Validators.required]],
        tipoBebidaId: ['', [Validators.required]],
        descricao: ['', [Validators.required]],
        valor: ['', [Validators.required]],
      }
    )

  }

  ngOnInit() {
      if (this.bebidaId != null) {
        this.actionType = 'Edit';
        this.bebidaService.getBebida(this.bebidaId)
          .subscribe(data => (
            this.bebidaExistente = data,

            this.form.controls['marcaId'].setValue(this.bebidaExistente.marcaId),
            this.form.controls['tipoBebidaId'].setValue(this.bebidaExistente.tipoBebidaId),
            this.form.controls['valor'].setValue(this.bebidaExistente.valor),
            this.form.controls['descricao'].setValue(this.bebidaExistente.descricao)));

      }

    this.loadTipoBebidas();
    this.loadMarcas();

  }
  loadTipoBebidas() {
    this.tipoBebidas$ = this.tipoBebidaService.getTipoBebidas();
  }
  loadMarcas() {
    this.marcas$ = this.marcaService.getMarcas();
  }


    save() {
      if (!this.form.valid) {
        return;
      }

      if (this.actionType === 'Add') {
        let bebida: Bebida = {
          tipoBebidaId: this.form.get('tipoBebidaId').value,
          marcaId: this.form.get('marcaId').value,
          descricao: this.form.get('descricao').value,
          valor: this.form.get('valor').value
        };

        this.bebidaService.saveBebida(bebida)
          .subscribe((data) => {
            this.router.navigate(['/bebidas/lista']);
          });
      }

      if (this.actionType === 'Edit') {
        let bebida: Bebida = {
          bebidaId: this.bebidaExistente.bebidaId,
          tipoBebidaId: this.form.get('tipoBebidaId').value,
          marcaId: this.form.get('marcaId').value,
          descricao: this.form.get('descricao').value,
          valor: this.form.get('valor').value
        };
        this.bebidaService.updateBebida(bebida)
          .subscribe((data) => {
            this.router.navigate(['/bebidas/lista']);
          });
      }

    }

    cancel() {
      this.router.navigate(['/bebidas/lista']);
    }

  }

