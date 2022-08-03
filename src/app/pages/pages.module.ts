import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})

export class PagesModule { }
