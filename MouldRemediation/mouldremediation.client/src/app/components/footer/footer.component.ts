import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class FooterComponent implements OnInit {
  constructor() {}

  today = new Date();

  isSubscribed = false;

  emailNewsForm: FormGroup;

  ngOnInit() {
    this.emailNewsForm = new FormGroup({
      emailNews: new FormControl(null, [Validators.required]),
    });
  }

  onSendEmail = () => {
    if (this.emailNewsForm.invalid) return;

    this.isSubscribed = true;
  };
}
