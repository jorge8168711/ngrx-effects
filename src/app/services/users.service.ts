import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../models';
import { UsersResponse } from '../interfaces/users';


@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient) {}

  public get(): Observable<User[]> {
    const params = new HttpParams();

    return this.http.get<UsersResponse>(
      `${environment.api}/users`,
      {
        params: params.append('delay', '1')
      }
    ).pipe( map((resp: UsersResponse) => resp.data) );
  }
}
