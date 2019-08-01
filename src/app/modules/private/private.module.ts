import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeAdmComponent } from './pages/home-adm/home-adm.component';


@NgModule({
  declarations: [HomeAdmComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
  ]
})
export class PrivateModule { }
