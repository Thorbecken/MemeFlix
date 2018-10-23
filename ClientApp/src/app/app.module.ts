import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviePlayerComponent } from './movie-player/movie-player.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MemePlayerComponent } from './meme-player/meme-player.component';

@NgModule({
   declarations: [
      AppComponent,
    MoviePlayerComponent,
    routingComponent,
    SubscriptionPageComponent,
    HomePageComponent,
    MemePlayerComponent
  ],
   imports: [
     BrowserModule,
     HttpClientModule,
     AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

