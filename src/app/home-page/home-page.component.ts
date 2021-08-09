import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

import {PostsService} from '../shared/posts.service';
import {Post, Rest} from '../shared/interfaces';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  posts: Post[]
  pSub: Subscription

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.pSub = this.postsService.getAll().subscribe((posts: Rest) => {
      console.log('posts: ', posts);
      console.log('this.posts: ', this.posts);
      this.posts = posts.articles
      console.log('this.posts: ', this.posts);
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}
