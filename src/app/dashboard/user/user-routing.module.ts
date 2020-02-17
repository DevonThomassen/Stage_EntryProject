import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { ManagementComponent } from './management/management.component';


const routes: Routes = [
  { path: '', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'user/detail/:id', component: DetailComponent, canActivate: [AuthGuard]},
  { path: 'user/management/add', component: ManagementComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
