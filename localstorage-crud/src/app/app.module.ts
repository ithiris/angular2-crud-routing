import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserlistService } from './userlist.service';

@NgModule({
  declarations: [
    AppComponent,
    UsereditComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
