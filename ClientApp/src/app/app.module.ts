import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviePlayerComponent } from './movie-player/movie-player.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';

@NgModule({
   declarations: [
      AppComponent,
    MoviePlayerComponent,
    routingComponent,
    SubscriptionPageComponent
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

