import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup

  public authLogin: string

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      // username: new FormControl(null, [
      //   Validators.required,
      // ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

  submit() {    
    if (this.form.invalid) {
      return
    }

  const user: User = {
    // username: this.form.value.username,
    email: this.form.value.email,
    password: this.form.value.password
    }
  
    this.auth.login(user).subscribe(
      data=>{
        this.form.reset()
       this.router.navigate(['/admin', 'create'])
     },
      error => {
        this.authLogin = error.error.message;
     } 

    )
  }
}
