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
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });

  

  submitted = false;

  getFormControlClass(controlName: string) {
    const control = this.form.get(controlName);
    return control?.touched && control?.invalid ? 'is-invalid' : '';
  }
  submit() {
    console.log(this.form.value);

    if (this.form.valid) {
      this.form.reset();
      this.submitted = false;
    } else {
      this.submitted = true;
    }
  }
}
