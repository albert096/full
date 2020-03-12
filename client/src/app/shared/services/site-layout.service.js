import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {User, Message} from '../interfaces'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class Site-layoutService {
  constructor(private http: HttpClient) {
  }

  fetch(): Observable<Site-layout[]> {
    return this.http.get<Site-layout[]>('/api/user')
  }
  
  

  getById(id: string): Observable<Site-layout> {
    return this.http.get<Site-layout>(`/api/user/${id}`)
  }
}
