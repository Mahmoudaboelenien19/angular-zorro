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
    <div class="page">
      <div class="w-full p-2">
        <nz-space nzSize="large">
          <button *nzSpaceItem nz-button nzType="primary">Button</button>
          <button *nzSpaceItem nz-button nzType="primary">Button</button>
          <button *nzSpaceItem nz-button nzType="primary">Button</button>
        </nz-space>

        <nz-divider nzText="spacing"></nz-divider>
      </div>
    </div>
  `,
  styles: [``],
})
export class ButtonsComponent {
  isLoading: boolean = false;
  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
