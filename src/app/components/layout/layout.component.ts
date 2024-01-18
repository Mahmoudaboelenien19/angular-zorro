import {
  Component,
  HostListener,
  OnInit,
  PLATFORM_ID,
  afterNextRender,
  afterRender,
  inject,
} from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, map } from 'rxjs';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    CommonModule,
    NzButtonModule,
  ],
  template: `
    <nz-layout>
      <!-- <nz-sider
        [nzCollapsible]="(isMobile$ | async) ? 'false' : 'true'"
        nzWidth="200px"
        [nzCollapsed]="isMobile$ | async"
      > -->
      <nz-sider
        [nzCollapsed]="showAside"
        nzWidth="200px"
        nzBreakpoint="lg"
        [nzCollapsible]="(isMobile$ | async) ? 'false' : 'true'"
        [nzTrigger]="null"
      >
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="inline">
          <li nz-menu-item>
            <span nz-icon nzType="pie-chart"></span>
            <span>Option 1</span>
          </li>
          <li nz-menu-item>
            <span nz-icon nzType="desktop"></span>
            <span>Option 2</span>
          </li>
          <li nz-submenu nzTitle="User" nzIcon="user">
            <ul>
              <li nz-menu-item>Tom</li>
              <li nz-menu-item>Bill</li>
              <li nz-menu-item>Alex</li>
            </ul>
          </li>
          <li nz-submenu nzTitle="Team" nzIcon="team">
            <ul>
              <li nz-menu-item>Team 1</li>
              <li nz-menu-item>Team 2</li>
            </ul>
          </li>
          <li nz-menu-item>
            <span nz-icon nzType="file"></span>
            <span>File</span>
          </li>
        </ul>
      </nz-sider>

      <nz-layout>
        <nz-header>
          @if(!(isMobile$|async)){

          <button nz-button (click)="toggleShowAside()">show</button>
          }
        </nz-header>
        <nz-content>
          <nz-breadcrumb>
            <nz-breadcrumb-item>User</nz-breadcrumb-item>
            <nz-breadcrumb-item>Bill</nz-breadcrumb-item>
          </nz-breadcrumb>
          <div class="inner-content">Bill is a cat.</div>
        </nz-content>
        <nz-footer>Ant Design ©2020 Implement By Angular</nz-footer>
      </nz-layout>
    </nz-layout>
  `,
  styles: [
    `
      .logo {
        height: 32px;
        margin: 16px;
        background: rgba(255, 255, 255, 0.3);
      }

      nz-header {
        background: #fff;
        padding: 0;
      }

      nz-content {
        margin: 0 16px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      .inner-content {
        padding: 24px;
        background: #fff;
        min-height: 560px;
      }

      nz-footer {
        text-align: center;
      }
      nz-sider {
        height: 100vh;
        position: sticky;
        top: 0;
        left: 0;
      }
    `,
  ],
})
export class LayoutComponent implements OnInit {
  showAside = false;
  toggleShowAside() {
    this.showAside = !this.showAside;
  }

  platformId = inject(PLATFORM_ID);
  isMobile$ = new BehaviorSubject<boolean | null>(null);
  ngOnInit(): void {}
  constructor(private breakpointObserver: BreakpointObserver) {
    if (isPlatformBrowser(this.platformId)) {
      this.breakpointObserver
        .observe('(max-width: 500px)')
        .pipe(map((result) => result.matches))
        .subscribe((matches) => {
          this.isMobile$.next(matches);
          console.log(this.isMobile$.value);
        });
    }
  }
}
