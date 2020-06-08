import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.sass']
})
export class ProductoListComponent implements OnInit {

  @Input() Productos: Array<Producto> = new Array();
  constructor() { }

  ngOnInit() {
  }

}
