import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoBebidaService } from '../services/tipo-bebida.service';
import { TipoBebida } from '../models/tipobebida';

@Component({
  selector: 'app-tipo-bebidas',
  templateUrl: './tipo-bebidas.component.html',
  styleUrls: ['./tipo-bebidas.component.scss']
})
export class TipoBebidasComponent implements OnInit {
  tipoBebidas$: Observable<TipoBebida[]>;

  constructor(private tipoBebidaService: TipoBebidaService) { }

  ngOnInit(): void {


    this.loadTipoBebidas();


  }

  loadTipoBebidas() {
    this.tipoBebidas$ = this.tipoBebidaService.getTipoBebidas();
  }

  delete(tipoBebidaId) {
    const ans = confirm('Deseja deletar registro? ');
    if (ans) {
      this.tipoBebidaService.deleteTipoBebida(tipoBebidaId).subscribe((data) => {
        this.loadTipoBebidas();
      });
    }
  }

}
