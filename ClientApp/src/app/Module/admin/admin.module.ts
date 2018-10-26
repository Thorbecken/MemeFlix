import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
