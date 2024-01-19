import { FormControl } from '@angular/forms';

export function passwordValidator(
  control: FormControl
): { [key: string]: boolean } | null {
  const value = control.value;
  const hasLetter = /[a-zA-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialCharacter = /[!@#$%^&*]/.test(value);

  if (!hasLetter || !hasNumber || !hasSpecialCharacter) {
    return { passwordRequirements: true };
  }

  return null;
}
