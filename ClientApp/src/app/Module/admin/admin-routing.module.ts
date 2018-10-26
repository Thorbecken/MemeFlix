import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from "../../about-page/about-page.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const adminRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
export const routingComponent = [AboutPageComponent]
