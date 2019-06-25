import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { Logincomponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: Logincomponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);