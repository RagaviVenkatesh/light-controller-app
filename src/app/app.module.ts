import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Must import this

import { AppComponent } from './app.component';
import { LightControlComponent } from './light-control/light-control.component';

@NgModule({
  declarations: [
    AppComponent,
    LightControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // ✅ Required for [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
