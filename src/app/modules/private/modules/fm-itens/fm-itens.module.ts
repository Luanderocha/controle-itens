import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmItensRoutingModule } from './fm-itens-routing.module';
import { RegisterItemsComponent } from './components/register-items/register-items.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';
import { FmItemsService } from './services/fm-items.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterItemsComponent, SearchItemsComponent],
  imports: [
    CommonModule,
    FmItensRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[FmItemsService]
})
export class FmItensModule { }
