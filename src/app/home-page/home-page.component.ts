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

  public errorFromPostService: string

  constructor(private postsService: PostsService) { }

  forNgOnInit() {
   this.pSub = this.postsService.getAll().subscribe((posts: Rest) => {
      // console.log('forNgOnInit()... posts: ',posts);
      this.posts = posts.articles
    })
  }

  ngOnInit() {
    this.forNgOnInit()
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

  reload(res: boolean | string) {
    if(res === true) {
      // console.log('RES TRUE: ', res);
      this.outMassege('Пост успешно удалён');
      setTimeout(()=> {
        this.forNgOnInit();
      }, 100);
    } else {
      // console.log('RES FALSE: ', res);
      const message: string = res as string;
      this.outMassege(message);
    } 
  }

  outMassege(message: string) {
    this.errorFromPostService = message;
    setTimeout(()=> {
      this.errorFromPostService = '';
    }, 2500);
  }

}
