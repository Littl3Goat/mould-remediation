import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { ReadySectionComponent } from './components/ready-section/ready-section.component';
import { ImageCompareComponent } from './components/image-compare/image-compare.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopMenuComponent,
    MainBannerComponent,
    WhyChooseUsComponent,
    OurServicesComponent,
    AboutUsComponent,
    ImageCompareComponent,
    OurClientsComponent,
    ReadySectionComponent,
    ContactUsComponent,
    FaqSectionComponent,
    FooterComponent,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
