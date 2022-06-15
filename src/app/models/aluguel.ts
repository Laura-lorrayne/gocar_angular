import { Time } from "@angular/common";

export class Aluguel {
  id!: number;
  idCliente!: number;
  idCarro!: number;
  idFornecedor!: number;
  dataRetirada!: Date;
  dataDevolucao!: Date;
  horaRetirada!: Time;
  horaDevolucao!: Time;
  valor!: number;
  status!: string;

}
