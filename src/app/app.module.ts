import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { BillsComponent } from './bills/bills.component';
import { PayComponent } from './pay/pay.component';
import { HistoryComponent } from './history/history.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingComponent,
    BillsComponent,
    PayComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
