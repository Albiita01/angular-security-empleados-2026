import { Injectable, signal } from "@angular/core";
import { Empleado } from "../models/empleado";
import { ServiceEmpleados } from "./service.empleados";

@Injectable({ providedIn: 'root' })
export class ServiceAuthEmpleados {

    constructor(private _service: ServiceEmpleados) { }

    // Utilizaremos signal para almacenar un objeto empleado
    public user = signal<Empleado | null>(null);

    async loginEmpleadoAsync(token: string): Promise<void> {
        sessionStorage.setItem("TOKEN", token);
        // Recuperamos el empleado con el token
        let empleado = await this._service.getPerfilEmpleadoAsync();
        this.user.set(empleado);
    }

    logOutEmpleado(): void {
        sessionStorage.removeItem("TOKEN");
        this.user.set(null);
    }
}