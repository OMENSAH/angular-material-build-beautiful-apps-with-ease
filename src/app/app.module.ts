import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule} from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRouters } from './app.routes';

import { AuthService } from './auth/auth.service';

@NgModule({ 
  declarations: [
    AppComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
