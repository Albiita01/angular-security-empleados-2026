import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit {
  public empleados!: Array<Empleado>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados
  ){}

  async ngOnInit(): Promise<void> {
    this.empleados = await this._service.getSubordinadosAsync();
    this._cdr.detectChanges();
  }
}
