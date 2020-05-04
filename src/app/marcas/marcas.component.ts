import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarcaService } from '../services/marca.service';
import { Marca } from '../models/marca';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {
  marcas$: Observable<Marca[]>;

  constructor(private marcaService: MarcaService) { }

  ngOnInit(): void {


    this.loadMarcas();


  }

  loadMarcas() {
    this.marcas$ = this.marcaService.getMarcas();
  }

  delete(marcaId) {
    const ans = confirm('Deseja deletar registro? ');
    if (ans) {
      this.marcaService.deleteMarca(marcaId).subscribe((data) => {
        this.loadMarcas();
      });
    }
  }

}
