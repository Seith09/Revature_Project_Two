import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/api/v1/users')
  }

  addUser(data: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/api/v1/users', data)
  }
}
