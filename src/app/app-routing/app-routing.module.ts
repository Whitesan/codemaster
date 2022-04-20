import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { PriceComponent } from '../components/price/price.component';


  const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'price', component: PriceComponent }
]

   @NgModule({
   imports: [
   RouterModule.forRoot(routes)
   ],
   exports: [
   RouterModule
   ],
   declarations: []
   })
   export class AppRoutingModule { }