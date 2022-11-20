import { AbstractControl } from "@angular/forms";

export function youtubeValidator(control: AbstractControl) {
  const input: string = control.value;

  if (input.includes('https://www.youtube.com/watch?v=') || input == '') {
    return null;
  }

  return { youtube: true };
}
