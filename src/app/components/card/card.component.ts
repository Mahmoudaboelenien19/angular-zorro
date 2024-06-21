import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

const card = {
  _id: { $oid: '65ab324eba4fbd30a8570e5b' },
  title: 'Nike Cali Sport',
  description:
    "The Nike Originals Superstar Shoes are a popular sneaker that features a comfortable fit and stylish design. With its iconic shell toe and classic look, it's the perfect shoe for anyone who wants to add some retro style to their wardrobe.",
  category: 'fashion',
  price: { $numberDouble: '90.8' },
  stock: '29',
  state: 'exclusive',
  rating: [
    { $numberInt: '4' },
    { $numberInt: '5' },
    { $numberInt: '1' },
    { $numberInt: '1' },
    { $numberInt: '2' },
  ],
  image: {
    productPath:
      'https://res.cloudinary.com/domobky11/image/upload/v1681674559/products/home-shoe-2.png.png',
    ProductName: 'home-shoe-2.png',
    _id: { $oid: '643c514757a1d860b84d94f7' },
  },
};

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NzCardModule, NzImageModule, NzTypographyModule, NzIconModule],
  template: `
    <div class="container page">
      <div class="row mx-auto">
        @for(c of [card,card,card,card,card,card,card];track c){
        <div class="p-1 col-12 col-sm-6 col-md-4 col-lg-3">
          <nz-card
            nzLoading="false"
            [nzCover]="coverTemplate"
            [nzActions]="[actionSetting, actionEdit, actionEllipsis]"
            class="shadow-sm position-relative"
          >
            <div
              class="state d-flex justify-content-center align-items-center fw-bold "
            >
              {{ card.state }}
            </div>
            <nz-card-meta
              [nzTitle]="title"
              [nzDescription]="desc"
            ></nz-card-meta>
          </nz-card>
          <ng-template #desc>
            <p
              nz-typography
              nzEllipsis
              [nzEllipsisRows]="3"
              [nzContent]="card.description"
              nzType="secondary"
            ></p>
          </ng-template>
          <ng-template #title>
            <div class="d-flex flex-column">
              <div class="d-flex justify-content-between align-items-center">
                <h5
                  nz-typography
                  nzEllipsis
                  nzType="success"
                  [nzContent]="card.category"
                ></h5>
                <h5 nz-typography nzEllipsis nzType="warning">
                  <p>{{ card.stock }} in stock</p>
                </h5>
              </div>

              <h5
                nz-typography
                nzEllipsis
                [nzEllipsisRows]="1"
                [nzContent]="card.title"
              ></h5>
            </div>
          </ng-template>
          <ng-template #coverTemplate>
            <div
              class="img-cont d-flex justify-content-center align-items-center"
            >
              <img
                nz-image
                [nzSrc]="card.image.productPath"
                nzPlaceholder="https://res.cloudinary.com/domobky11/image/upload/w_30/v1681674559/products/home-shoe-2.png.png"
                class="mx-auto"
              />
            </div>
          </ng-template>

          <ng-template #actionSetting>
            <span nz-icon nzType="setting"></span>
          </ng-template>
          <ng-template #actionEdit>
            <span nz-icon nzType="edit"></span>
          </ng-template>
          <ng-template #actionEllipsis>
            <span nz-icon nzType="ellipsis"> </span>
          </ng-template>
        </div>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .img-cont {
        height: 200px;
        background: gray;
      }
      img {
        width: 75%;
        transition: all 0.3s;
      }
      img:hover {
        transform: scale(1.1);
      }
      .state {
        position: absolute;
        left: 0;
        top: 10px;
        width: fit-content;
        padding: 0 10px;
        height: 40px;
        background: green;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        text-transform: capitalize;
        font-size: 0.8rem;
        color: white;
        opacity: 0.7;
      }
    `,
  ],
})
export class CardComponent {
  card = card;
}
