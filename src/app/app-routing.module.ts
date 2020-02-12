import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';


const routes: Routes = [
  {
    path: '', redirectTo: '/auth', pathMatch: 'full'
  },
  {
    path: 'auth', loadChildren: () =>
      import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'dashboard', loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
