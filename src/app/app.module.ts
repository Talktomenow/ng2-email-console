import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { EmailFormComponent } from './email-form/email-form.component';

import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

import { SpinnerModule } from 'angular2-spinner';

import { EmailService } from './dao/email-service';

@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    SpinnerModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
