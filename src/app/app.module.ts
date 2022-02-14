import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitDisplayComponent } from './git-display/git-display.component';
import { GitFormComponent } from './git-form/git-form.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UppercaseDirective } from './uppercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GitDisplayComponent,
    GitFormComponent,
    LandingpageComponent,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
