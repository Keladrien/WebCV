import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const user = sessionStorage.getItem('user');

  if (user) {
    return true;
  } else {
    router.navigate(['/admin']);
    return false;
  }
};