import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MemePlayerComponent } from './meme-player/meme-player.component';
import { MemeService } from './services/meme.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
   declarations: [
      AppComponent,
    routingComponent,
    SubscriptionPageComponent,
    HomePageComponent,
    MemePlayerComponent,
    PageNotFoundComponent
  ],
   imports: [
     BrowserModule,
     FormsModule,
     HttpClientModule,
     AppRoutingModule
  ],
  providers: [MemeService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

