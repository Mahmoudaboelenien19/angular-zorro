import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, LayoutComponent],
  template: `
    <app-nav-bar></app-nav-bar>

    <router-outlet></router-outlet>
  `,
  styles: `
  `,
})
export class AppComponent {}
