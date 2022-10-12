import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { MenuComponent } from './components/menu/menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialExampleModule } from './material.module';
import { MenuIconButtonComponent } from './menu-icon-button/menu-icon-button.component';
import { AppRoutingModule } from './app-routing.module';
import { WindowComponent } from './components/window/window.component';
import { ContactComponent } from './views/about-us/contact/contact.component';

import { FormsModule } from '@angular/forms';
import { RedirectLinkComponent } from './components/redirect-link/redirect-link.component';
import { SearchComponent } from './views/search/search.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    MenuComponent,
    MenuIconButtonComponent,
    WindowComponent,
    ContactComponent,
    RedirectLinkComponent,
    SearchComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatNativeDateModule,
    HttpClientModule,

    FormsModule,

    RouterModule,
    RouterModule.forRoot([]),
    AppRoutingModule,

    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
