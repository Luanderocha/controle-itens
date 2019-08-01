import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
