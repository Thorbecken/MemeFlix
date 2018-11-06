import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from "./Modules/home/about-page/about-page.component";
import { SubscriptionPageComponent } from "./Modules/home/subscription-page/subscription-page.component";
import { HomePageComponent } from "./Modules/home/home-page/home-page.component";
import { PageNotFoundComponent } from "./Modules/home/page-not-found/page-not-found.component";
import { WelcomePageComponent } from "./Modules/home/welcome-page/welcome-page.component";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { AdminAuthGuardService } from "./services/admin-auth-guard.service";

const ADMIN_ROLE = 'Admin';

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
    loadChildren: './Module/admin/admin.module#AdminModule',
    canActivate: [AdminAuthGuardService],
    data: {
      expectedRole: ADMIN_ROLE
    }
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
