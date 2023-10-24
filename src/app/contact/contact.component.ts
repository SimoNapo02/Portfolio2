import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, emailValidator]),
    body: new FormControl('', Validators.required)
  });

  submitted = false;
  showModal = false;

  getFormControlClass(controlName: string) {
    const control = this.form.get(controlName);
    return control?.touched && control?.invalid ? 'is-invalid' : '';
  }

  submit() {
    console.log(this.form.value);

    if (this.form.valid) {
      this.showModal = true;
    }

    this.submitted = true;
  }
}

function emailValidator(control: FormControl): { [key: string]: boolean } | null {
  const email: string = control.value;
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!pattern.test(email)) {
    return { 'invalidEmail': true };
  }

  return null;
}
