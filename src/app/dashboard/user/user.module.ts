import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  declarations: [UserComponent, DetailComponent, AddComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class UserModule { }
