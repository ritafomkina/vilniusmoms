import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { RouterModule } from '@angular/router';
import Core from '../core/core.module';

import DesktopAppRoutingModule from './desktop-app-routing.module';

import MainComponent from './components/main/main.component';
import StartSectionComponent from './components/start-section/start-section.component';
import SectionSeparatorComponent from './components/section-separator/section-separator.component';
import PregnancySectionComponent from './components/pregnancy-section/pregnancy-section.component';
import BirthSectionComponent from './components/birth-section/birth-section.component';
import ToddlerSectionComponent from './components/toddler-section/toddler-section.component';
import LinksSectionComponent from './components/links-section/links-section.component';
import SharedModule from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    StartSectionComponent,
    SectionSeparatorComponent,
    PregnancySectionComponent,
    BirthSectionComponent,
    ToddlerSectionComponent,
    LinksSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    Core,
    // RouterModule,
    DesktopAppRoutingModule,
    // DialogModule,
  ],
  exports: [
    MainComponent,
  ],
})
export default class DesktopAppModule { }
