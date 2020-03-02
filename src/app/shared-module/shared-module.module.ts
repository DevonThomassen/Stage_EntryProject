import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [DialogComponent, ReactiveFormsModule]
})
export class SharedModuleModule { }
