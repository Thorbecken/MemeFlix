import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NgModule } from '@angular/core';
import { MemeCreatorComponent } from './components/meme-creator/meme-creator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    MemeCreatorComponent
  ]
})
export class AdminModule { }
