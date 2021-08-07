import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../shared/interfaces';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string | null {
    return localStorage.getItem('nest-token');
  }

  login(user: User): Observable<any> {
    const userobj = {user: user}
    //console.log(userobj);
     return this.http.post('http://localhost:3000/users/login', userobj)
    //return this.http.post('http://localhost:3000/users', userobj)

    // return this.http.post('http://localhost:3000/users/login', user)
    // return this.http.post('http://localhost:3000/users', user)
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
