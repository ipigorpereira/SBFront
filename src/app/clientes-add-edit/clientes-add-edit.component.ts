import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-clientes-add-edit',
  templateUrl: './clientes-add-edit.component.html',
  styleUrls: ['./clientes-add-edit.component.scss']
})
export class ClientesAddEditComponent implements OnInit {

  form: FormGroup;
  actionType: string;
  formNome: string;
  formCpf: string;
  formEndereco: string;
  clienteId: string;
  errorMessage: any;
  clienteExistente: Cliente;

  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder,
    private avRoute: ActivatedRoute,
    private router: Router
  ) {

    const idParam = 'id';
    this.actionType = 'Add';
    this.formNome = 'nome';
    this.formCpf = 'CPF';
    this.formEndereco = 'Endereco';




    if (this.avRoute.snapshot.params[idParam]) {
      this.clienteId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        endereco: ['',],
      }
    )

  }

  ngOnInit() {
    if (this.clienteId != null) {
      this.actionType = 'Edit';
      this.clienteService.getCliente(this.clienteId)
        .subscribe(data => (
          this.clienteExistente = data,

          this.form.controls['nome'].setValue(this.clienteExistente.nome),
          this.form.controls['cpf'].setValue(this.clienteExistente.cpf),
          this.form.controls['endereco'].setValue(this.clienteExistente.endereco)));

    }
  }


  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let cliente: Cliente = {
        nome: this.form.get('nome').value,
        cpf: this.form.get('cpf').value,
        endereco: this.form.get('endereco').value
      };

      this.clienteService.saveCliente(cliente)
        .subscribe((data) => {
          this.router.navigate(['/clientes/lista']);
        });
    }

    if (this.actionType === 'Edit') {
      let cliente: Cliente = {
        clienteId: this.clienteExistente.clienteId,
        nome: this.form.get('nome').value,
        cpf: this.form.get('cpf').value,
        endereco: this.form.get('endereco').value
      };
      this.clienteService.updateCliente(cliente)
        .subscribe((data) => {
          this.router.navigate(['/clientes/lista']);
        });
    }

  }

  cancel() {
    this.router.navigate(['/clientes/lista']);
  }

}
