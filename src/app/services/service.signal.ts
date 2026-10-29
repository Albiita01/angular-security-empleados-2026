import { computed, Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ServiceSignal {
    public contador = signal(0);

    // Podemos utilizar computed() para acciones de un signal
    public doble = computed(() => {
        return this.contador() * 2
    })

    reiniciarContador(): void {
        this.contador.set(0);
    }

    incrementarContador(): void {
        this.contador.update(value => value + 1);
    }
}