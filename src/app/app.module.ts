import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import AppRoutingModule from './app-routing.module';
import Core from './core/core.module';
import Shared from './shared/shared.module';
import AppComponent from './app.component';
import SectionSeparatorComponent from './components/section-separator/section-separator.component';
import StartComponent from './components/start-section/start-section.component';
import PregnancyComponent from './components/pregnancy-section/pregnancy-section.component';
import BirthComponent from './components/birth-section/birth-section.component';
import ToddlerComponent from './components/toddler-section/toddler-section.component';
import LinksComponent from './components/links-section/links-section.component';
import ChooseCountryPopupComponent from './components/shared-pupups/choose-country-popup/choose-country-popup.component';
import RegistrationUAComponent from './components/pregnancy-popups/registration-ua/registration-ua.component';
import RegistrationBELComponent from './components/pregnancy-popups/registration-bel/registration-bel.component';
import HospitalsComponent from './components/pregnancy-popups/hospitals/hospitals.component';
import PriceComponent from './components/pregnancy-popups/price/price.component';
import PriceUAComponent from './components/pregnancy-popups/price-ua/price-ua.component';
import PriceBELComponent from './components/pregnancy-popups/price-bel/price-bel.component';
import VeiklaComponent from './components/pregnancy-popups/veikla/veikla.component';
import ChooseInsuranseComponent from './components/pregnancy-popups/choose-insurance/choose-insurance.component';
import EmploymentComponent from './components/pregnancy-popups/employment/employment.component';
import BenefitsComponent from './components/pregnancy-popups/benefits/benefits.component';
import ClinicComponent from './components/birth-popups/clinic/clinic.component';
import DocumentsUAComponent from './components/birth-popups/documents-ua/documents-ua.component';
import DocumentsBELComponent from './components/birth-popups/documents-bel/documents-bel.component';
import DocumentsRUComponent from './components/birth-popups/documents-ru/documents-ru.component';
import MamashealthComponent from './components/birth-popups/mamashealth/mamashealth.component';
import DadsBenefitsComponent from './components/birth-popups/dads-benefits/dads-benefits.component';
import ChooseKindergartenComponent from './components/toddler-popups/choose-kindergarten/choose-kindergarten.component';
import KindergartenPriceComponent from './components/toddler-popups/kindergarten-price/kindergarten-price.component';
import KindergartenApplicationComponent from './components/toddler-popups/kindergarten-application/kindergarten-application.component';
import KindergartenDocumentsnComponent from './components/toddler-popups/kindergarten-documents/kindergarten-documents.component';
import KidsHealthComponent from './components/toddler-popups/kids-health/kids-health.component';
import KidsMoneyComponent from './components/toddler-popups/kids-money/kids-money.component';
import KidsActivitiesComponent from './components/toddler-popups/kids-activities/kids-activities.component';
import KidsEntertainmentComponent from './components/toddler-popups/kids-entertainment/kids-entertainment.component';
import KidsPoolstComponent from './components/toddler-popups/kids-pools/kids-pools.component';
import ChatsComponent from './components/links-popups/chats/chats.component';
import ReusesComponent from './components/links-popups/reuse/reuse.component';
import BabysittersComponent from './components/links-popups/babysitters/babysitters.component';
import HelpinLTsComponent from './components/links-popups/helpin-lt/helpin-lt.component';
import SecondHandsComponent from './components/links-popups/second-hands/second-hands.component';
import DentistComponent from './components/links-popups/dentist/dentist.component';
import KidsGoodsComponent from './components/links-popups/kids-goods/kids-goods.component';
import DoulasComponent from './components/links-popups/doulas/doulas.component';
import FeedBacksComponent from './components/links-popups/feed-backs/feed-backs.component';
import HelpinUAComponent from './components/links-popups/helpin-ua/helpin-ua.component';
import MobileAppComponent from './components/mobile-app/mobile-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionSeparatorComponent,
    StartComponent,
    PregnancyComponent,
    BirthComponent,
    ToddlerComponent,
    LinksComponent,
    ChooseCountryPopupComponent,
    RegistrationUAComponent,
    RegistrationBELComponent,
    HospitalsComponent,
    PriceComponent,
    PriceUAComponent,
    PriceBELComponent,
    VeiklaComponent,
    ChooseInsuranseComponent,
    EmploymentComponent,
    BenefitsComponent,
    ClinicComponent,
    DocumentsUAComponent,
    DocumentsBELComponent,
    DocumentsRUComponent,
    MamashealthComponent,
    DadsBenefitsComponent,
    ChooseKindergartenComponent,
    KindergartenPriceComponent,
    KindergartenApplicationComponent,
    KindergartenDocumentsnComponent,
    KidsHealthComponent,
    KidsMoneyComponent,
    KidsActivitiesComponent,
    KidsEntertainmentComponent,
    KidsPoolstComponent,
    ChatsComponent,
    ReusesComponent,
    BabysittersComponent,
    HelpinLTsComponent,
    SecondHandsComponent,
    DentistComponent,
    KidsGoodsComponent,
    DoulasComponent,
    FeedBacksComponent,
    HelpinUAComponent,
    MobileAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Shared,
    Core,
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
