import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    BaseComponent
  ],
  exports: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class BaseModule { }
