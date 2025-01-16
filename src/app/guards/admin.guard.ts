import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService)
  if(authService.getUserRole()=='admin')
    return true;
  return false
};
