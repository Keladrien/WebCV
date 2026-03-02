import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Accomp } from './accomp/accomp';
import { Notfound } from './notfound/notfound';
import { Admin } from './admin/admin';
import { AdminPanel } from './admin-panel/admin-panel';
import { authGuard } from './auth-guard';


export const routes: Routes = [
    {
        path : "",
        component : HomePage,
        title : "Lucas Minville"
    },
    {
        path: "accomplissement",
        component : Accomp,
        title :"Accomplissement"
    },
    {
        path: "admin",
        component: Admin,
        title: "Admin"
    },
    {
        path: "panel",
        component: AdminPanel,
        title: "Admin Panel",
        canActivate: [authGuard],
    },
    {
        path: "**",
        component: Notfound,
        title: "Page not found"
    }
];
