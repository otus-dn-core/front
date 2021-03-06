import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/shared/posts.service';
import {Post} from '../../shared/interfaces';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private postsService: PostsService
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required),
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const post: Post = {
      title: this.form.value.title,
      description: this.form.value.description,
      body: this.form.value.body,
    }

    this.postsService.create(post).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/'])
    })
    
  }
}
