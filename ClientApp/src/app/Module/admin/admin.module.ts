import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NgModule } from '@angular/core';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    EditorComponent
  ]
})
export class AdminModule { }
