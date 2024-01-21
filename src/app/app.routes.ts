import { Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component.js';
import { LoginComponent } from './components/login/login.component.js';
import { SignupComponent } from './components/signup/signup.component.js';
import { FormTwoComponent } from './components/form-two/form-two.component.js';
import { HomeComponent } from './components/home/home.component.js';
import { CardComponent } from './components/card/card.component.js';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'form', component: FormTwoComponent },
  { path: 'card', component: CardComponent },
];
