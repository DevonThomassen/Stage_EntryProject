import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './auth/logged-in.guard';
import { LoggedOutGuard } from './auth/logged-out.guard';


const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule', canActivate: [LoggedOutGuard] },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
