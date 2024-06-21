import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { Component } from '@angular/core';
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
import { NzGridModule } from 'ng-zorro-antd/grid';
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
  selector: 'app-form-two',
  standalone: true,
  imports: [
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzTypographyModule,
    NzNotificationModule,
    NzGridModule,
    NzCheckboxModule,
  ],
  template: `
    <div class=" page ">
      <form
        class="w-100 form-login  "
        nz-form
        [formGroup]="validateForm"
        (ngSubmit)="submitForm()"
      >
        <h3 class="text-center" nz-typography>Register Now. !</h3>
        <p class="text-center w-75 mx-auto" nz-typography nzType="secondary">
          Welcome! Please enter your details below to create an account.
        </p>
        @for(inp of inputs ; track inp){
        <nz-form-item>
          <nz-form-label [nzSm]="6" [nzXs]="24" nzRequired [nzFor]="inp.name">{{
            inp.placeholder
          }}</nz-form-label>
          <nz-form-control
            [nzSm]="14"
            [nzXs]="24"
            [nzErrorTip]="error"
            nzHasFeedback
          >
            <input
              nz-input
              [formControlName]="inp.name"
              [id]="inp.name"
              [type]="inp.type"
            />
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
        <nz-form-item nz-row class="register-area">
          <nz-form-control
            [nzXs]="{ span: 24 }"
            [nzSm]="{ span: 16, offset: 6 }"
          >
            <label nz-checkbox formControlName="agree">
              <span>
                I have read the
                <a>agreement</a>
              </span>
            </label>
          </nz-form-control>
        </nz-form-item>

        <nz-form-item nz-row>
          <nz-form-control
            [nzXs]="{ span: 24 }"
            [nzSm]="{ span: 16, offset: 6 }"
          >
            <button nz-button nzType="primary" class=" col-12 col-sm-4">
              Register
            </button>
          </nz-form-control>
        </nz-form-item>
      </form>
    </div>
  `,
  styles: [
    `
      .form-login {
        max-width: 600px;
      }
      small {
        text-align: center;
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class FormTwoComponent {
  inputs = inputs;
  validateForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
    email: FormControl<string>;
    confirm: FormControl<string>;
    agree: FormControl<boolean>;
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
    agree: [false],
  });

  submitForm(): void {
    if (this.validateForm.valid && this.validateForm.get('agree')?.value) {
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
