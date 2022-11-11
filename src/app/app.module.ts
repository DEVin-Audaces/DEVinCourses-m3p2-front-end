import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainingScreenComponent } from './components/training-screen/training-screen.component';
import { ContentScreenComponent } from '../../content-screen/content-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingScreenComponent,
    ContentScreenComponent
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
