import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [NzGridModule, NzDividerModule, NzButtonModule, NzSpaceModule],
  template: `
    <div nz-row nzJustify="space-between">
      @for(x of [1,2,3];track x;){

      <div class="demo" nz-col nzXs="24" nzMd="12" nzLg="8">
        <div style="background: blue;height: 100%">hi</div>
      </div>

      }
    </div>
    <nz-divider nzText="spacing"></nz-divider>
    <div>
      <nz-space nzSize="large">
        <button *nzSpaceItem nz-button nzType="primary">Button</button>
        <button *nzSpaceItem nz-button nzType="primary">Button</button>
        <button *nzSpaceItem nz-button nzType="primary">Button</button>
      </nz-space>
    </div>
  `,
  styles: [
    `
      div.demo {
        height: 100px;
        padding: 10px;
      }
    `,
  ],
})
export class ButtonsComponent {
  isLoading: boolean = false;
  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
