import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from "./about-page/about-page.component";
import { SubscriptionPageComponent } from "./subscription-page/subscription-page.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'subscription',
    component: SubscriptionPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent = [AboutPageComponent]
