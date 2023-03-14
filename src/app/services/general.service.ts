import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  showDialog = false;
  emailData: any;

  constructor(private http: HttpClient) { }

  getEmailData() {
    return this.http.get('https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail');
  }
}
