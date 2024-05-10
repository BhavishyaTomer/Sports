import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LiveComponent } from './live.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LiveComponent],
  imports: [
    CommonModule,
    LiveRoutingModule,
    RouterModule
  ]
})
export class LiveModule { }
