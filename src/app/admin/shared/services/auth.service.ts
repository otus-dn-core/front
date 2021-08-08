import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../shared/interfaces';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string | null {
    return localStorage.getItem('nest-token');
  }

  login(user: User): Observable<any> {
    const userobj = {user: user}
     return this.http.post(`${environment.adminApi}/users/login`, userobj)
    .pipe(
      tap(this.setToken)
    )
  }

  register(user: User): Observable<any> {
    const userobj = {user: user}
     return this.http.post(`${environment.adminApi}/users`, userobj)
    .pipe(
      tap(this.setToken)
    )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: any | null) {
    if (response) {
      // console.log(response.user.token);
    localStorage.setItem('nest-token', response.user.token);
    } else {
      localStorage.clear();
    }
  }
}
