import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { DoYourSelfComponent } from './do-your-self/do-your-self.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavBarComponent,
    CarouselComponent,
    CardsComponent,
    DoYourSelfComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LandingPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingPageModule { }
