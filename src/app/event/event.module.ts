import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { RouterModule } from '@angular/router';
import { EventComponent } from './event.component';


@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    RouterModule
  ]
})
export class EventModule { }
