import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { DetailComponent } from './detail/detail.component';
import { LoggedInGuard } from 'src/app/auth/logged-in.guard';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', component: UserComponent, canActivate: [LoggedInGuard] },
  { path: 'user/detail/:id', component: DetailComponent, canActivate: [LoggedInGuard]},
  { path: 'user/add', component: AddComponent, canActivate: [LoggedInGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
