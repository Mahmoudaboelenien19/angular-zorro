import { Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormTwoComponent } from './components/form-two/form-two.component';

export const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'form', component: FormTwoComponent },
];
