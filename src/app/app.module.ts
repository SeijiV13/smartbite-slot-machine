import { MessageBoxComponent } from './components/message-box/message-box.component';
import { SlotItemComponent } from './components/slot-item/slot-item.component';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap/alert';
@NgModule({
  declarations: [
    AppComponent,
    TableContainerComponent,
    SlotItemComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //bootstrap modules
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
