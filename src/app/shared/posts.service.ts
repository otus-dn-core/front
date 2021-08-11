import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Post, Rest} from './interfaces';
import {environment} from '../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {

  
  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    const postobj = {article: post}
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
