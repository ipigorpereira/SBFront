import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BebidaService } from '../services/bebida.service';
import { Bebida } from '../models/bebida';
import { Marca } from '../models/marca';
import { MarcaService } from '../services/marca.service';
import { TipoBebida } from '../models/tipobebida';
import { TipoBebidaService } from '../services/tipo-bebida.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {
  bebidas$: Bebida[];
  marca$: Marca
  tipoBebida$: TipoBebida;

  constructor(private bebidaService: BebidaService, private marcaService: MarcaService, private tipoBebidaService: TipoBebidaService) { }

  ngOnInit(): void {


    this.loadBebidas();

  }


  loadBebidas() {
    this.bebidaService.getBebidas().subscribe(data => this.bebidas$ = data);

    }



  delete(bebidaId) {
    const ans = confirm('Deseja deletar registro? ');
    if (ans) {
      this.bebidaService.deleteBebida(bebidaId).subscribe((data) => {
        this.loadBebidas();
      });
    }
  }

  CarregaMarcaeTipoBebida(marcaId, tipoBebidaId) {
    this.marcaService.getMarca(marcaId).subscribe(
      data => this.marca$ = data
    );
    this.tipoBebidaService.getTipoBebida(tipoBebidaId).subscribe(
      data => this.tipoBebida$ = data
    );
  }

  RetornaObjetoAjustado(bebida, index, bebidas) {
    this.marcaService.getMarca(bebida.marcaId).subscribe(
      data => bebida.marcaId = data.nome
    );
    this.tipoBebidaService.getTipoBebida(bebida.tipoBebidaId).subscribe(
      data => bebida.tipoBebidaId = data.tipo
      );

  }


  }

