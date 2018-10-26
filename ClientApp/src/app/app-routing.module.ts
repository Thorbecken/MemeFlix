import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from "./about-page/about-page.component";
import { SubscriptionPageComponent } from "./subscription-page/subscription-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent = [AboutPageComponent]
