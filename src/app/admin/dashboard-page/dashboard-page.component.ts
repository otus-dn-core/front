import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../shared/posts.service';
import {Post, Rest} from '../../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[]
  pSub: Subscription

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.pSub = this.postsService.getAll().subscribe((posts: Rest) => {
      console.log('posts: ', posts);
      console.log('this.posts: ', this.posts);
      this.posts = posts.articles
      console.log('this.posts: ', this.posts);
    })
  }

  remove(id: string) {

  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}
