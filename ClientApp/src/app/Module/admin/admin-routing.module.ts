import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from "../../about-page/about-page.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MemeCreatorComponent } from "./components/meme-creator/meme-creator.component";

const adminRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'meme-creator',
    component: MemeCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
