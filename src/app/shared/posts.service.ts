import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post, Rest} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    const postobj = {article: post}
    // console.log(postobj);
    return this.http.post(`${environment.adminApi}/articles`, postobj)
      .pipe(map((response: any) => {
        return {
          ...post,
          id: response.name
        }
      }))
  }

    getAll(): Observable<any> {
    return this.http.get(`${environment.adminApi}/articles`)
  }

  deleteArticle(slug: string): Observable<any> {
    return this.http.delete(`${environment.adminApi}/articles/${slug}`)
  }

}
