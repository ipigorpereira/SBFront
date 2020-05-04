import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MarcaService } from '../services/marca.service';
import { Marca } from '../models/marca';

@Component({
  selector: 'app-marcas-add-edit',
  templateUrl: './marcas-add-edit.component.html',
  styleUrls: ['./marcas-add-edit.component.scss']
})
export class MarcasAddEditComponent implements OnInit {

  form: FormGroup;
  actionType: string;
  formNome: string;
  marcaId: string;
  errorMessage: any;
  marcaExistente: Marca;

  constructor(private marcaService: MarcaService, private formBuilder: FormBuilder,
    private avRoute: ActivatedRoute,
    private router: Router
  ) {

    const idParam = 'id';
    this.actionType = 'Add';
    this.formNome = 'nome';




    if (this.avRoute.snapshot.params[idParam]) {
      this.marcaId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],

      }
    )

  }

  ngOnInit() {
    if (this.marcaId != null) {
      this.actionType = 'Edit';
      this.marcaService.getMarca(this.marcaId)
        .subscribe(data => (
          this.marcaExistente = data,

          this.form.controls['nome'].setValue(this.marcaExistente.nome)
));

    }
  }


  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let marca: Marca = {
        nome: this.form.get('nome').value

      };

      this.marcaService.saveMarca(marca)
        .subscribe((data) => {
          this.router.navigate(['/marcas/lista']);
        });
    }

    if (this.actionType === 'Edit') {
      let marca: Marca = {
        marcaId: this.marcaExistente.marcaId,
        nome: this.form.get('nome').value

      };
      this.marcaService.updateMarca(marca)
        .subscribe((data) => {
          this.router.navigate(['/marcas/lista']);
        });
    }

  }

  cancel() {
    this.router.navigate(['/marcas/lista']);
  }

}
