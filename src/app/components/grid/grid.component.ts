import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [NzGridModule],
  template: `
    <div class=" page ">
      <div nz-row nzJustify="space-between" class="w-full">
        @for(x of [1,2,3];track x;){

        <div class="demo" nz-col nzXs="24" nzMd="12" nzLg="8">
          <div style="background: blue;height: 100%">hi</div>
        </div>

        }
      </div>
    </div>
  `,
  styles: `
        div.demo {
        height: 100px;
        padding: 10px;
      }
  `,
})
export class GridComponent {}
