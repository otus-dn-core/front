import { Component, Input, OnInit } from '@angular/core';

import {Post} from '../shared/interfaces';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  
  // @Input() post: Post
  @Input() post: any

  
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  
  deleteArticle(event: Event) {
    event.preventDefault()
    // console.log("1: ", this.post.author, "2: ", this.post.slug);
    this.postsService.deleteArticle(this.post.slug).subscribe(res => console.log(res)
    );
    // console.log("3: all");
  }

}
