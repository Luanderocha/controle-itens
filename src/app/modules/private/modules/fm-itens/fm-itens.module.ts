import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmItensRoutingModule } from './fm-itens-routing.module';
import { RegisterItemsComponent } from './components/register-items/register-items.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';
import { FmItemsService } from './services/fm-items.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';


@NgModule({
  declarations: [RegisterItemsComponent, SearchItemsComponent],
  imports: [
    CommonModule,
    FmItensRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule
  ],
  providers: [FmItemsService]
})
export class FmItensModule { }
