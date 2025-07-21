import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewEnquiryDto } from '../dtos/NewEnquiryDto';

export class NewEnquiryFg extends FormGroup {
  constructor() {
    super({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ]),
      phone: new FormControl(null, [Validators.required]),
      service: new FormControl(null, [Validators.required]),
      message: new FormControl(null, []),
    });
  }

  toModel(): NewEnquiryDto | null {
    if (this.invalid) return null;

    const { value } = this;
    const model = new NewEnquiryDto();

    model.name = value.name;
    model.email = value.email;
    model.phone = value.phone;
    model.service = value.service;
    model.message = value.message;

    return model;
  }
}
