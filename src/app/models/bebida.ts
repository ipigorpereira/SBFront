import { Marca } from '../models/marca';
import { TipoBebida } from '../models/tipobebida';

export class Bebida {
  bebidaId?: string;
  marcaId: string;
  tipoBebidaId: string;
  descricao: string;
  valor: number;
  marca?: Marca;
  tipoBebida?: TipoBebida;

}
