import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    const postobj = {article: post}
    console.log(postobj);
    return this.http.post(`${environment.adminApi}/articles`, postobj)
      .pipe(map((response: any) => {
        return {
          ...post,
          id: response.name
        }
      }))
  }
}
