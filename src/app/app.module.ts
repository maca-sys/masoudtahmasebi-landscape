import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { SwipeDirective } from './shared/directives/swipe.directive';
import { HeaderComponent } from './shared/components/header/header.component';
import { NoSanitizePipe } from './shared/pipes/no-sanitize.pipe';
import { MtPortfolioMakerComponent } from './shared/components/portfolio-maker/portfolio-maker.component';

@NgModule({
  declarations: [
    AppComponent,
    MtPortfolioMakerComponent,
    HeaderComponent,
    NoSanitizePipe,
    SwipeDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
