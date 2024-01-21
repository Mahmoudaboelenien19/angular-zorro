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
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { passwordValidator } from '../../../lib/validate';
import {
  NzNotificationModule,
  NzNotificationService,
} from 'ng-zorro-antd/notification';

const inputs = [
  {
    placeholder: 'Username',
    type: 'text',
    name: 'username',
    icon: 'user',
  },
  {
    placeholder: 'E-mail',
    type: 'email',
    name: 'email',
    icon: 'mail',
  },
  {
    placeholder: 'Password',
    type: 'password',
    name: 'password',
    icon: 'lock',
  },
];
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzTypographyModule,
    NzNotificationModule,
  ],
  template: `
    <div
      class="mt-5 d-flex justify-content-center align-items-center w-100  h-75 "
    >
      <form
        nz-form
        [formGroup]="validateForm"
        class="w-100 form-login  px-3 py-5 bg-light shadow-sm"
        (ngSubmit)="submitForm()"
      >
        <h3 class="text-center" nz-typography>Welcome Back. !</h3>
        <p class="text-center w-75 mx-auto" nz-typography nzType="secondary">
          Please enter your email and password below to access your account.
        </p>
        @for(inp of inputs ; track inp){

        <nz-form-item>
          <nz-form-control [nzErrorTip]="error">
            <nz-input-group [nzPrefixIcon]="inp.icon">
              <input
                [type]="inp.type"
                nz-input
                [formControlName]="inp.name"
                [placeholder]="inp.placeholder"
              />
            </nz-input-group>
          </nz-form-control>
          <ng-template #error>
            @if(validateForm.get(inp.name)?.errors?.['required']){

            <small> add your {{ inp.name }}</small>
            }@else if (validateForm.get(inp.name)?.errors?.['minlength']){

            <small>your {{ inp.name }} must be at least 8 letters</small>
            } @else if (validateForm.get(inp.name)?.errors?.['maxlength']) {

            <small>your {{ inp.name }} must be at most 16 letters</small>
            } @else if (validateForm.get(inp.name)?.errors?.['email']) {

            <small>add a valid email </small>
            }@else if(validateForm
            .hasError('passwordRequirements',"password")){

            <small
              >Password should contain at least one letter ,one number and one
              special character</small
            >
            }
          </ng-template>
        </nz-form-item>

        }
        <button nz-button [nzType]="'primary'" nzBlock>Log in</button>
        <div class="d-flex justify-content-center align-items-center mt-3">
          don't have an account ?
          <button nz-button nzType="link">register now!</button>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .form-login {
        max-width: 400px;
      }
      small {
        text-align: center;
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class LoginComponent {
  inputs = inputs;
  validateForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
    email: FormControl<string>;
  }> = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(16)],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        passwordValidator,
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.notification.success('', 'you successfully submited form');
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private notification: NzNotificationService
  ) {}
}
