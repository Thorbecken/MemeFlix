import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubscriptionPageComponent } from './Modules/home/subscription-page/subscription-page.component';
import { HomePageComponent } from './Modules/home/home-page/home-page.component';
import { MemePlayerComponent } from './Modules/home/meme-player/meme-player.component';
import { MemeService } from './services/meme.service';
import { PageNotFoundComponent } from './Modules/home/page-not-found/page-not-found.component';
import { WelcomePageComponent } from './Modules/home/welcome-page/welcome-page.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

@NgModule({
   declarations: [
      AppComponent,
    routingComponent,
    SubscriptionPageComponent,
    HomePageComponent,
    MemePlayerComponent,
    PageNotFoundComponent,
    WelcomePageComponent
  ],
   imports: [
     BrowserModule,
     FormsModule,
     HttpClientModule,
     AppRoutingModule
  ],
  providers: [
    MemeService,
    AdminAuthGuardService
  ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

