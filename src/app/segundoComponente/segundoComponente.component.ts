import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente.component';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundoComponente.component.html',
  styleUrls: ['./segundoComponente.component.css'],
})
export class SegundoComponente implements OnInit {
  @Input()
  listaClientes!: Cliente;

  @Input()
  indice!: number;

  constructor() {}

  ngOnInit(): void {}
}
