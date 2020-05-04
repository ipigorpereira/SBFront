import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes$: Observable<Cliente[]>;

constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {


    this.loadClientes();


}

  loadClientes() {
    this.clientes$ = this.clienteService.getClientes();
  }

  delete(clienteId) {
    const ans = confirm('Deseja deletar registro? ' );
    if (ans) {
      this.clienteService.deleteCliente(clienteId).subscribe((data) => {
        this.loadClientes();
      });
    }
  }

}
