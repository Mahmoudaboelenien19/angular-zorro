import { Component, OnInit } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { RouterModule } from '@angular/router';
import {
  BreakpointMap,
  NzBreakpointService,
} from 'ng-zorro-antd/core/services';
import { CommonModule, Location } from '@angular/common';
const links = [
  { link: 'home', path: '' },
  { link: 'button', path: '/buttons' },
  { link: 'logi n', path: '/login' },
  { link: 'signup', path: '/signup' },
  { link: 'form ', path: '/form' },
  { link: 'card ', path: '/card' },
];
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterModule,
    NzMenuModule,
    NzButtonModule,
    NzTypographyModule,
    NzIconModule,
    CommonModule,
  ],
  template: `
    <nav
      class=" position-sticky top-0   navbar navbar-expand-sm navbar-light bg-light "
    >
      <div class="container-fluid  h-100  ">
        <a class="navbar-brand" href="#">Navbar</a>

        <div class="collapse navbar-collapse h-100" id="navbarNav">
          <ul class="navbar-nav bg-light h-100">
            @for(link of links ; track link){

            <li class="nav-item mx-2 h-100">
              <a
                (click)="setActiveLink(link.path)"
                class="nav-link d-flex align-items-center "
                [ngClass]="activeLink == link.path ? 'active text-primary' : ''"
                aria-current="page"
                [routerLink]="[link.path]"
                >{{ link.link }}</a
              >
            </li>
            }
          </ul>
        </div>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class=" navbar-toggler border-0 outline-0 bg-transparent"
        >
          <i class="bi bi-three-dots-vertical"></i>
        </button>
      </div>
    </nav>
  `,
  styles: [
    `
      nav {
        z-index: 5;
        left: 0;
        padding-block: 0;
        height: 50px;
      }
      .navbar-collapse {
        max-width: fit-content;
      }
      .nav-link {
        opacity: 0.7;
        text-transform: capitalize;
        position: relative;
        height: 100%;
      }
      .nav-link:hover,
      .nav-link.active {
        opacity: 1;
      }
      @media (min-width: 577px) {
        .nav-link::after,
        .nav-link::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: #f55;
          transition: 0.3s ease-in-out;
        }

        .nav-link.active::after,
        .nav-link:hover::after {
          width: 100%; /* Increase the width to 100% */
          right: initial;
          left: 0;
        }
      }
      @media (max-width: 576px) {
        .navbar-nav {
          position: fixed;
          width: 100vw;
          height: 100vh;
          z-index: 5;
          top: 50px;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .nav-link {
          font-size: 30px;
          font-weight: bold;
        }
      }
    `,
  ],
})
export class NavBarComponent implements OnInit {
  links = links;
  activeLink = '';
  isMobile = false;
  ngOnInit(): void {
    this.activeLink = this.location.path();
  }
  constructor(
    private breakpointService: NzBreakpointService,
    private location: Location
  ) {
    //@ts-ignore
    this.breakpointService.subscribe((isMobile) => {
      console.log(isMobile?.matches);
    });
  }
  setActiveLink(path: string) {
    this.activeLink = path;
  }
}
