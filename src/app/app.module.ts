import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/features/features.component';
import { CustomerSupportComponent } from './components/customer-support/customer-support.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { IntroComponent } from './components/intro/intro.component';
import { ProductsComponent } from './components/products/products.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BannerComponent } from './components/banner/banner.component';
import { ItemsCardComponent } from './components/items-card/items-card.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    CustomerSupportComponent,
    BenefitsComponent,
    IntroComponent,
    ProductsComponent,
    AppointmentComponent,
    HomepageComponent,
    BannerComponent,
    ItemsCardComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
