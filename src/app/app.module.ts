import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MtSlideshowComponent } from './shared/components/slider/slider.component';
import { NoSanitizePipe } from './shared/pipes/no-sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MtSlideshowComponent,
    HeaderComponent,
    NoSanitizePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
