import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VendaService } from '../services/venda.service';
import { Venda } from '../models/venda';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {
  vendas$: Venda[];
  clientes$: Cliente[];
;

  constructor(private vendaService: VendaService, private clienteService: ClienteService) { }



  ngOnInit(): void {


    this.loadVendas();

  }


  loadVendas() {
    this.vendaService.getVendas().subscribe(data => this.vendas$ = data);

  }



  delete(vendaId) {
    const ans = confirm('Deseja deletar registro? ');
    if (ans) {
      this.vendaService.deleteVenda(vendaId).subscribe((data) => {
        this.loadVendas();
      });
    }
  }

  CarregaClientes(clienteId, tipoVendaId) {
    this.clienteService.getClientes().subscribe(
      data => this.clientes$ = data
    );
  }


}

