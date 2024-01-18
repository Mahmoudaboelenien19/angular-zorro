import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterModule,
    NzMenuModule,
    NzButtonModule,
    NzTypographyModule,
    NzIconModule,
  ],
  template: `
    <nav>
      <div class="logo">yogo</div>
      <ul nz-menu nzMode="horizontal">
        <li nz-menu-item>
          <a routerLink="/buttons">buttosn</a>
        </li>
        <li nz-menu-item>
          <a routerLink="/form">form</a>
        </li>
      </ul>
      <button>theme</button>
    </nav>
  `,
})
export class NavBarComponent {}
