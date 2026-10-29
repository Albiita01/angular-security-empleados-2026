import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  MaybeAsync,
  GuardResult
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (sessionStorage.getItem("TOKEN")) {
      // Si tenemos token, dejamos pasar
      return true;
    } else {
      // Si el usuario no está autorizado, lo llevamos a la página de login
      // Tenemos que enviar también el estado de la url, para que no se pierdan los parámetros
      return this._router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } })
    }
  }
}