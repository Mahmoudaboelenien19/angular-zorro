import { Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormTestComponent } from './components/form-test/form-test.component';

export const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'form', component: FormTestComponent },
];
