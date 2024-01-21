import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  NzNotificationModule,
  NzNotificationService,
} from 'ng-zorro-antd/notification';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { passwordValidator } from '../../../lib/validate';
import { Subscription } from 'rxjs';
type Pass = 'text' | 'password';

const inputs = [
  {
    placeholder: 'Username',
    type: 'text',
    name: 'username',
    icon: 'user',
  },
  {
    placeholder: 'Email',
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
  {
    placeholder: 'confirm Password',
    type: 'password',
    name: 'confirm',
    icon: 'lock',
  },
];
@Component({
  selector: 'app-signup',
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
    <div class="d-flex justify-content-center align-items-center w-100  h-75 ">
      <form
        nz-form
        [formGroup]="validateForm"
        class="w-100 form-login  px-3 py-5"
        (ngSubmit)="submitForm()"
      >
        <h3 class="text-center" nz-typography>Register Now. !</h3>
        <p class="text-center w-75 mx-auto" nz-typography nzType="secondary">
          Welcome! Please enter your details below to create an account.
        </p>
        @for(inp of inputs ; track inp){

        <nz-form-item>
          <nz-form-control [nzErrorTip]="error">
            <nz-input-group [nzSuffix]="suffixTemplate">
              <input
                [type]="
                  inp.name == 'password'
                    ? passwordType
                    : inp.name == 'confirm'
                    ? confirmType
                    : inp.type
                "
                nz-input
                [formControlName]="inp.name"
                [placeholder]="inp.placeholder"
              />
            </nz-input-group>

            <ng-template #suffixTemplate>
              <span
                nz-icon
                [nzType]="inp.icon"
                (click)="showPassword(inp.name)"
              ></span>
            </ng-template>
          </nz-form-control>
          <ng-template #error>
            @if(inp.name == "confirm" &&
            validateForm.get("confirm")?.errors?.['required']){

            <small> confirm your password</small>
            }@else if (inp.name == "confirm"
            &&validateForm.hasError('passwordMismatch', 'confirm')) {
            <small>Passwords do not match</small>
            } @else if(validateForm.get(inp.name)?.errors?.['required']){

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
        <button nz-button [nzType]="'primary'" nzBlock>register</button>
        <div class="d-flex justify-content-center align-items-center mt-3">
          have an account ?
          <button nz-button nzType="link">sign in</button>
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
export class SignupComponent implements OnInit {
  passwordType: Pass = 'password';
  confirmType: Pass | 'password' = 'password';
  showPassword(name: string): void {
    if (name === 'password') {
      this.passwordType = this.passwordType == 'password' ? 'text' : 'password';
    }
    if (name === 'confirm') {
      this.confirmType = this.confirmType == 'password' ? 'text' : 'password';
    }
  }
  inputs = inputs;
  validateForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
    email: FormControl<string>;
    confirm: FormControl<string>;
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
    confirm: ['', [Validators.required, this.passwordMatchValidator()]],
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

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = this.validateForm?.get('password')?.value;
      const confirm = control.value;
      return password === confirm ? null : { passwordMismatch: true };
    };
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private notification: NzNotificationService
  ) {}

  //this part to make recheck confirm if user changes password input
  subscription: any;
  ngOnInit(): void {
    // Other initialization code...

    const passwordControl = this.validateForm.get('password') as FormControl;
    const confirmControl = this.validateForm.get('confirm') as FormControl;

    this.subscription = passwordControl.valueChanges.subscribe(() => {
      confirmControl.updateValueAndValidity();
    });
  }
}
