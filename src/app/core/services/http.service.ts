import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = environment.baseURL; // Use environment file if needed

  constructor(private http: HttpClient) { }

  get<T>(endpoint: string, params?: any, headers?: any): Observable<ApiResponse<T>> {
    const httpParams = new HttpParams({ fromObject: params || {} });
    const httpHeaders = new HttpHeaders(headers || {});
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}/${endpoint}`, { params: httpParams, headers: httpHeaders });
  }

  post<T>(endpoint: string, body: any, headers?: any): Observable<ApiResponse<T>> {
    const httpHeaders = new HttpHeaders(headers || {});
    return this.http.post<ApiResponse<T>>(`${this.baseUrl}/${endpoint}`, body, { headers: httpHeaders });
  }

  put<T>(endpoint: string, body: any, headers?: any): Observable<ApiResponse<T>> {
    const httpHeaders = new HttpHeaders(headers || {});
    return this.http.put<ApiResponse<T>>(`${this.baseUrl}/${endpoint}`, body, { headers: httpHeaders });
  }

  delete<T>(endpoint: string, headers?: any): Observable<ApiResponse<T>> {
    const httpHeaders = new HttpHeaders(headers || {});
    return this.http.delete<ApiResponse<T>>(`${this.baseUrl}/${endpoint}`, { headers: httpHeaders });
  }

  patch<T>(endpoint: string, body: any, headers?: any): Observable<ApiResponse<T>> {
    const httpHeaders = new HttpHeaders(headers || {});
    return this.http.patch<ApiResponse<T>>(`${this.baseUrl}/${endpoint}`, body, { headers: httpHeaders });
  }
}
