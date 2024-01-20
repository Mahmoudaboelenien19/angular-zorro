import { Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormTwoComponent } from './components/form-two/form-two.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'form', component: FormTwoComponent },
  { path: 'card', component: CardComponent },
];
