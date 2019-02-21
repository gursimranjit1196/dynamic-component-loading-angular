import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Link1Component } from './components/links/link-1/link-1.component';
import { Link2Component } from './components/links/link-2/link-2.component';
import { Link3Component } from './components/links/link-3/link-3.component';
import { LinksComponent } from './components/links/links.component';
import { LinksService } from './services/links.services';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDynLoadingComponent } from './components/modal-dyn-loading/modal-dyn-loading.component';
import { CompRefLoadingComponent } from './components/comp-ref-loading/comp-ref-loading.component';


@NgModule({
  declarations: [
    AppComponent,
    Link1Component,
    Link2Component,
    Link3Component,
    LinksComponent,
    HomeComponent,
    MessageComponent,
    ModalComponent,
    ModalDynLoadingComponent,
    CompRefLoadingComponent
  ],
  entryComponents: [
    Link1Component,
    Link2Component,
    Link3Component,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    LinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
