import { Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { adminGuardGuard } from './admin-guard.guard';

export const routes: Routes = [
    { path: 'one', component: OneComponent, canActivate: [adminGuardGuard]},
    { path: 'two', component: TwoComponent},
];

