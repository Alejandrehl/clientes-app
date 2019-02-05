import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo: string = "Crear cliente";

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
  }

  public create(): void {
    this.clienteService.create(this.cliente)
      .subscribe( cliente => {
        this.router.navigate(['/clientes'])
        Swal.fire('Nuevo Cliente', 'Cliente '+ cliente.nombre +' creado con éxito!', 'success')
      }
    );
  }

}
