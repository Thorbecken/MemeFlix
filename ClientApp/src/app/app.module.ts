import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MemePlayerComponent } from './meme-player/meme-player.component';

@NgModule({
   declarations: [
      AppComponent,
    routingComponent,
    SubscriptionPageComponent,
    HomePageComponent,
    MemePlayerComponent
  ],
   imports: [
     BrowserModule,
     FormsModule,
     HttpClientModule,
     AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

