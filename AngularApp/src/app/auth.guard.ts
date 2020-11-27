import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){

  }
  // tslint:disable-next-line: typedef
  canActivate(): boolean {
if (!this.authService.isUserLoggedIn()){
this.router.navigate(['/login']);
  }

return this.authService.isUserLoggedIn();
}
  }

