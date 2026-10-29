import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {
  public empleado!: Empleado;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados
  ){}

  async ngOnInit(): Promise<void> {
    this.empleado = await this._service.getPerfilEmpleadoAsync();
    this._cdr.detectChanges();
  }
}
