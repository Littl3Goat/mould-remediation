import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: 'contact-us.component.html',
  imports: [ReactiveFormsModule],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      service: new FormControl(null, []),
      message: new FormControl(null, [Validators.required]),
    });
  }

  onSendMessage = () => {
    if (this.contactForm.invalid) return;

    console.log(this.contactForm.value);
  };
}
