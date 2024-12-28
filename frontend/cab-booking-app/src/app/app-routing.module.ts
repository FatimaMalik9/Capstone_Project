import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { BookingFormComponent } from './booking-form/booking-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', component: BookingFormComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
