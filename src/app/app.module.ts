import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { EntryComponent } from './entry/entry.component';
import { Routes, RouterModule } from '@angular/router';
import {SharedService} from './shared.service';

const navRoutes: Routes = [{path:'entry', component:EntryComponent},
                          {path:'display', component:DisplayComponent}];

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(navRoutes)
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
