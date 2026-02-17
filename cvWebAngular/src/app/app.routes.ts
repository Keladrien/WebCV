import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Accomp } from './accomp/accomp';

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
    }
];
