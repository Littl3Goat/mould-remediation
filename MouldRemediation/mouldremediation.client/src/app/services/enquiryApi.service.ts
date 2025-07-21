import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { NewEnquiryDto } from '../models/dtos/NewEnquiryDto';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EnquiryApiService {
  private readonly _baseUrl = `${environment.baseUrl}/enquiries`;
  private http = inject(HttpClient);

  sendNewEnquiryAsync = (newEnquiry: NewEnquiryDto): Promise<void> => {
    return lastValueFrom(this.http.post<void>(this._baseUrl, newEnquiry));
  };
}
