import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import AppRoutingModule from './app-routing.module';
// import Core from './core/core.module';
// import Shared from './shared/shared.module';
import AppComponent from './app.component';
// import DesktopAppModule from './desktop-app/desktop-app.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Shared,
    // Core,
    // DesktopAppModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { scrollStrategy: new NoopScrollStrategy() },
    },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule { }
