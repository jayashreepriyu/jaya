import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PayComponent } from './pay/pay.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: "upcoming",
    component: UpcomingComponent
  },
  {
    path: "pay",
    component: PayComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },
  {
    path: "",
    redirectTo: "upcoming",
    pathMatch: "full"
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
