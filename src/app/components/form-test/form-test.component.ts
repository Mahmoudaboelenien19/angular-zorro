import { Component } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-form-test',
  standalone: true,
  imports: [
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
    NzCheckboxModule,
  ],
  template: `
    <div class="d-flex justify-content-center align-items-center w-100  h-100 ">
      <form
        nz-form
        [formGroup]="validateForm"
        class="w-100 form-login  px-3 py-5"
        (ngSubmit)="submitForm()"
      >
        <nz-form-item>
          <nz-form-control nzErrorTip="Please input your username!">
            <nz-input-group nzPrefixIcon="user">
              <input
                type="text"
                nz-input
                formControlName="userName"
                placeholder="Usernamee"
              />
            </nz-input-group>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-control nzErrorTip="Please input your Password!">
            <nz-input-group nzPrefixIcon="lock">
              <input
                type="password"
                nz-input
                formControlName="password"
                placeholder="Password"
              />
            </nz-input-group>
          </nz-form-control>
        </nz-form-item>
        <div nz-row nzJustify="space-between" nzAlign="middle" class="my-2">
          <div nz-col>
            <label nz-checkbox formControlName="remember">
              <span>Remember me</span>
            </label>
          </div>
          <div nz-col>
            <a>Forgot password</a>
          </div>
        </div>

        <button nz-button [nzType]="'primary'" nzBlock>Log in</button>
        Or
        <a>register now!</a>
      </form>
    </div>
  `,
  styles: [
    `
      .form-login {
        max-width: 400px;
        background-color: grey;
      }
    `,
  ],
})
export class FormTestComponent {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true],
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: NonNullableFormBuilder) {}
}
