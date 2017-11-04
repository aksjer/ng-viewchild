import { environment } from './../environments/environment';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  api = `${environment.api}/users`;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.api);
  }

}
