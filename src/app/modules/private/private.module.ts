import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeAdmComponent } from './pages/home-adm/home-adm.component';
import { PrivateRoutingModule } from './private-routing.module';


@NgModule({
  declarations: [HomeAdmComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
  ],
  providers:[]
})
export class PrivateModule { }
