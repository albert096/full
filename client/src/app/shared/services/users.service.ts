import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {User, Message} from '../interfaces'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }
  
  fetch(): Observable<User[]> {
    return this.http.get<User[]>('/api/user')
  }
  
  
  getById(id: string): Observable<User> {
    return this.http.get<User>(`/api/user/${id}`)
  }
  
  create(name: string, email: string, password: string): Observable<User> {
    const fd = new FormData()
	fd.append('name', name)
	
	fd.append('email', email)
	
	fd.append('password', password)

    return this.http.post<User>('/api/user', fd)
  }

  update(id: string, name: string, email: string, password: string): Observable<User> {
    const fd = new FormData()

    fd.append('name', name)
	
	fd.append('email', email)
	
	fd.append('password', password)

    return this.http.patch<User>(`/api/user/${id}`, fd)
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/user/${id}`)
  }
}




