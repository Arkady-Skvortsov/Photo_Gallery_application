import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent, CardsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
