import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BebidaService } from '../services/bebida.service';
import { Bebida } from '../models/bebida';
import { Estoque } from '../models/estoque';


@Component({
  selector: 'app-bebidas-estoque',
  templateUrl: './bebidas-estoque.component.html',
  styleUrls: ['./bebidas-estoque.component.scss']
})
export class BebidasEstoqueComponent implements OnInit {


  form: FormGroup;
  actionType: string;
  bebidaId: string;
  errorMessage: any;
  bebidaExistente: Bebida;
  numeroEstoque: number;

  constructor(private bebidaService: BebidaService,
              private formBuilder: FormBuilder,
              private avRoute: ActivatedRoute,
              private router: Router
  ) {

    const idParam = 'id';
    this.actionType = 'Add';

    if (this.avRoute.snapshot.params[idParam]) {
      this.bebidaId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        bebidaId: ['', [Validators.required]],
        quantidade: ['', [Validators.required]],
      }
    )

  }

  ngOnInit() {
    if (this.bebidaId != null) {
      this.bebidaService.getBebida(this.bebidaId)
        .subscribe(data => (
          this.bebidaExistente = data,
          this.form.controls['bebidaId'].setValue(this.bebidaExistente.bebidaId)));

      this.bebidaService.getEstoque(this.bebidaId).subscribe(data => (
        this.numeroEstoque = data.quantidade)
      );
    }

  }

  Adicionar() {
    debugger;
    if (!this.form.valid) {
      return;
    }
    const ans = confirm('Deseja adicionar no estoque? ');
    if (ans) {
      let estoque: Estoque = {
        bebidaId: this.form.get('bebidaId').value,
        quantidade: this.form.get('quantidade').value
      };
      debugger;

      this.bebidaService.adicionaBebida(estoque)
        .subscribe((data) => {
          location.reload();
        });
    }

  }

  Remover() {
    if (!this.form.valid) {
      return;
    }
    const ans = confirm('Deseja remover do estoque? ');
    if (ans) {
      let estoque: Estoque = {
        bebidaId: this.form.get('bebidaId').value,
        quantidade: this.form.get('quantidade').value
      };

      if (this.numeroEstoque < estoque.quantidade) {
        alert("Quantidade inválida");
        location.reload();
        return;
      }


      this.bebidaService.removeBebida(estoque)
        .subscribe((data) => {
          location.reload();
        });
    }

  }

  cancel() {
    this.router.navigate(['/bebidas/lista']);
  }

}

