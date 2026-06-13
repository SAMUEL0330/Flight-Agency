import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URLs separadas para auth y flights
  private authUrl = 'http://localhost:3000/api';  // Backend real para autenticación
  private flightsUrl = 'https://36df8d58-7402-4290-a452-298e7ace282c.mock.pstmn.io';  // Mock server para vuelos

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(`${this.authUrl}/auth/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.authUrl}/auth/login`, data);
  }

  verify2fa(data: any): Observable<any> {
    return this.http.post(`${this.authUrl}/auth/verify-2fa`, data);
  }

  saveFlight(data: any, token: string): Observable<any> {
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.post(`${this.flightsUrl}/flights`, data, { headers });
  }

  getFlights(token: string): Observable<any> {
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.get(`${this.flightsUrl}/flights`, { headers });
  }
}
