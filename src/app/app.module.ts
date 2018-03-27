import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormconfigService } from './formconfig.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewInstanceComponent } from './forms/new-instance/new-instance.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewInstanceComponent,
    FormsComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [FormconfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
