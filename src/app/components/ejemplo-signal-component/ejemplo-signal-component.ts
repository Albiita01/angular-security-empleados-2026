import { Component, computed, inject, signal } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-ejemplo-signal-component',
  standalone: false,
  styleUrl: './ejemplo-signal-component.css',
  templateUrl: './ejemplo-signal-component.html',
})
export class EjemploSignalComponent {
  // Recuperamos nuestro servicio utilizando inject
  // Para que sea singleton
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  // Esta variable apunta al contador del service
  public contador = this._serviceSignal.contador;
  public doble = this._serviceSignal.doble;


  // Antes del inject (no estaba lo de public contador ni doble)
  // // Podemos utilizar computed() para acciones de un signal
  // public doble = computed(() => {
  //   return this.contador() * 2
  // })

  reiniciarContador(): void {
    this._serviceSignal.reiniciarContador();
  }

  incrementarContador(): void {
    this._serviceSignal.incrementarContador();
  }
}
