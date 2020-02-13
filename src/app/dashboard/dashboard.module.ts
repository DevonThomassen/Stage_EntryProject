import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [DashboardComponent, AppBarComponent, UsersComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
