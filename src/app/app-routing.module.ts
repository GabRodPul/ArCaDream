import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactComponent } from './views/about-us/contact/contact.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },  
  { path: 'about-us/contact', component: ContactComponent },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }