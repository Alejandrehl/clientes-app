import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo: string = "Crear cliente";

  constructor(private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente()
  }

  public create(): void {
    this.clienteService.create(this.cliente)
      .subscribe( cliente => {
        this.router.navigate(['/clientes'])
        swal.fire('Nuevo Cliente', 'Cliente '+ cliente.nombre +' creado con éxito!', 'success')
      }
    );
  }

  public cargarCliente(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id'];

      if(id) {
        this.clienteService.getCliente(id).subscribe( cliente => this.cliente = cliente )
      }
    })
  }

  public update(): void {
    this.clienteService.update(this.cliente).subscribe( cliente => {
      this.router.navigate(['/clientes'])
      swal.fire('Cliente actualizado', 'Cliente '+ cliente.nombre +' actualizado con éxito!', 'success')
    })
  }

}
