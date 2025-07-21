import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NewEnquiryFg } from '../../models/form-groups/NewEnquiryFg';
import { EnquiryApiService } from '../../services/enquiryApi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: 'contact-us.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactUsComponent implements OnInit {
  private enquiryApi = inject(EnquiryApiService);

  isSubmitting = false;
  isSubmitted = false;
  enquiryForm: NewEnquiryFg;

  ngOnInit() {
    this.enquiryForm = new NewEnquiryFg();
  }

  onSendMessage = async () => {
    const model = this.enquiryForm.toModel();

    if (!model) return;

    try {
      this.isSubmitting = true;

      await this.enquiryApi.sendNewEnquiryAsync(model);
    } catch (error) {
      console.log(error);
    } finally {
      this.isSubmitted = true;
    }
  };
}
