import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeaserComponent } from './modules/phones/teaser/teaser.component';
import { PhoneComponent } from './modules/phones/phone/phone.component';
import { ComparisonComponent } from './modules/phones/comparison/comparison.component';
import { ItemPriceComponent } from './modules/phones/comparison/item-price/item-price.component';
import { StarRatingComponent } from './modules/phones/comparison/item-price/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    TeaserComponent,
    PhoneComponent,
    ComparisonComponent,
    ItemPriceComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule.forRoot(),
  ],
  exports:[
    StarRatingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
