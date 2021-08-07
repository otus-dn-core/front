import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AuthService } from './shared/services/auth.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AdminLayoutComponent,
  LoginPageComponent,
  CreatePostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'create', component: CreatePostComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AdminModule { }