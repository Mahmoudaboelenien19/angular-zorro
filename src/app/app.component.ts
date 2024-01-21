import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NzConfigService } from 'ng-zorro-antd/core/config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, LayoutComponent],
  template: `
    <!-- <app-layout></app-layout> -->
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `,
  styles: `  `,
})
export class AppComponent {
  // constructor(private nzConfigService: NzConfigService) {}
}
