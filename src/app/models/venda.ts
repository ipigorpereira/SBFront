import { MatDatepickerModule } from '@angular/material/datepicker';
export class Venda {
  vendaId?: string;
  clienteId: string;
  cliente: string;
  data: Date;
  pedidoEntregue: boolean;
  statusPagamento: boolean;
  valorOrcamento: number;
  valorReal: number;

}
