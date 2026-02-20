import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Accomp } from './accomp/accomp';
import { Notfound } from './notfound/notfound';

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
        path: "**",
        component: Notfound,
        title: "Page not found"
    }
];
