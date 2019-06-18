import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersResponse } from '../interfaces/users';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UsersService {
  private baseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  public get(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(`${this.baseUrl}/users`);
  }
}
