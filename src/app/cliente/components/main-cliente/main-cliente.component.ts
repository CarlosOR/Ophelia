import { Component, OnInit } from '@angular/core';
import { ClienteState } from '../../models/ClienteState';
import { Store } from '@ngrx/store';
import { Cliente } from '../../models/Cliente';
import { getClientes } from '../../state/selectors/cliente.selector';
import { CargarClientes, ModificarCliente, EliminarCliente, CrearCliente, MarcarClienteSeleccionado } from '../../state/actions/cliente.actions';

@Component({
  selector: 'main-cliente',
  templateUrl: './main-cliente.component.html',
  styleUrls: ['./main-cliente.component.sass']
})
export class MainClienteComponent implements OnInit {
  MaxDate = new Date();
  MinDate = new Date();
  Clientes: Array<Cliente> = new Array();
  constructor(private clienteStore: Store<ClienteState>) {
    this.MaxDate.setFullYear(this.MaxDate.getFullYear() - 5);
    this.MinDate.setFullYear(this.MinDate.getFullYear() - 100);
  }

  ngOnInit() {
    this.clienteStore.dispatch(CargarClientes());
    this.clienteStore.select(getClientes).subscribe(clientes => this.Clientes = [...clientes]);

  }

  logEvent(data, type) {

    switch (type) {
      case "RowUpdating":
        let newData = {
          id: data.oldData.id,
          identificacion: (data.newData.identificacion ? data.newData.identificacion : data.oldData.identificacion),
          nombre: (data.newData.nombre ? data.newData.nombre : data.oldData.nombre),
          telefono: (data.newData.telefono ? data.newData.telefono : data.oldData.telefono),
          fechaNacimiento: (data.newData.fechaNacimiento ? data.newData.fechaNacimiento : data.oldData.fechaNacimiento)
        }
        this.Actualizar(this.MapearCliente(newData));
        break;
      case "RowInserting":
        this.Crear(this.MapearCliente(data.data));
        break;
      case "RowRemoving":
        this.Eliminar(this.MapearCliente(data.data).id);
        break;
      default:
        break;
    }
  }

  SelectionChanged(e) {
    console.log(e.selectedRowsData);
    const cliente: Cliente = e.selectedRowsData;
    this.MarcarCliente(cliente);
  }

  MapearCliente(data): Cliente {
    const cliente: Cliente = {
      id: data.id || null,
      identificacion: data.identificacion,
      nombre: data.nombre,
      telefono: data.telefono,
      fechaNacimiento: data.fechaNacimiento
    };
    return cliente;
  }

  Crear = (cliente: Cliente) => this.clienteStore.dispatch(CrearCliente({ cliente }));
  Actualizar = (cliente: Cliente) => this.clienteStore.dispatch(ModificarCliente({ cliente }));
  Eliminar = (clienteId: number) => this.clienteStore.dispatch(EliminarCliente({ clienteId }));
  MarcarCliente = (cliente: Cliente) => this.clienteStore.dispatch(MarcarClienteSeleccionado({ cliente }));
}
