import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = "https://randomuser.me/api/?results=50";
    return this.http.get(url);
  }
}
