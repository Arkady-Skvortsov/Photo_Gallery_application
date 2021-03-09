import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RandomComponent } from './random/random.component';
import { InputComponent } from './input/input.component';
import { NotificationComponent } from './notification/notification.component';
import { QuestionComponent } from './question/question.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//NGRX STORE
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RandomComponent,
    InputComponent,
    NotificationComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
