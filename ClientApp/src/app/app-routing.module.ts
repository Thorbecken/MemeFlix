import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from "./about-page/about-page.component";
import { SubscriptionPageComponent } from "./subscription-page/subscription-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
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
    path: 'admin',
    loadChildren: './Module/admin/admin.module#AdminModule'
  },
  {
    path: 'welcome',
    component: WelcomePageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent = [AboutPageComponent]
