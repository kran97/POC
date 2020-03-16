import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import { CustomerSupportComponent } from './components/customer-support/customer-support.component'
import { BenefitsComponent } from './components/benefits/benefits.component'
import { IntroComponent } from './components/intro/intro.component'
import { ProductsComponent } from './components/products/products.component'
import { AppointmentComponent } from "./components/appointment/appointment.component";
import { HomepageComponent } from "./components/homepage/homepage.component"
import { TopbarComponent } from "./components/topbar/topbar.component";
import { BannerComponent } from "./components/banner/banner.component";
import { ItemsCardComponent } from "./components/items-card/items-card.component";

const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'features', component: FeaturesComponent,
  },
  {
    path: 'support', component: CustomerSupportComponent
  },
  {
    path: 'benefits', component: BenefitsComponent
  },
  {
    path: 'intro', component: IntroComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'appointment', component: AppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
