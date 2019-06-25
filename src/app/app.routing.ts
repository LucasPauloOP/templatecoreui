import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*user*/
import {UserinicialComponent} from './container/user/userinicial/userinicial.component';
import {UserPostComponent} from './container/user/user-post/user-post.component';
import {UserPutComponent} from './container/user/user-put/user-put.component';
import {UserGetidComponent} from './container/user/user-getid/user-getid.component' 

/*teacher*/
import{TeacherComponent} from './container/teacher/teacher/teacher.component';
import{TeacherPostComponent} from './container/teacher/teacher-post/teacher-post.component';
import{TeacherPutComponent} from './container/teacher/teacher-put/teacher-put.component';
import{TeacherGetidComponent} from './container/teacher/teacher-getid/teacher-getid.component';

// /*course*/
import {CourseComponent} from './container/course/course/course.component';
import {CoursePostComponent} from './container/course/course-post/course-post.component';
import {CoursePutComponent} from './container/course/course-put/course-put.component';
import {CourseGetidComponent} from './container/course/course-getid/course-getid.component';

// /*student*/
import {StudentComponent} from './container/student/student/student.component'
import {StudentPostComponent} from './container/student/student-post/student-post.component'
import {StudentPutComponent} from './container/student/student-put/student-put.component'
import {StudentGetidComponent} from './container/student/student-getid/student-getid.component'

import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [

/*-----------------------------------user----------------------------------------------------------*/


{path: 'user/create', component: UserPostComponent,  data: { title: 'Cadastro de usuário' }},

{path: 'user/update/:id', component: UserPutComponent,  data: { title: 'Editar usuário' }},

{path:  'user/:id', component:UserGetidComponent,  data: { title: 'Detalhes do usuário' }},


// /*------------------------------------teacher------------------------------------------------------*/
{path: 'teacher', component: TeacherComponent,  data: { title: 'Lista de professors' } },

{path: 'teacher/create', component: TeacherPostComponent,  data: { title: 'Cadastro de professor' }},

{path: 'teacher/update/:id', component: TeacherPutComponent,  data: { title: 'Editar professor' }},

{path:  'teacher/:id', component:TeacherGetidComponent,  data: { title: 'Detalhes do professor' }},


// /*----------------------------------course---------------------------------------------------------*/
{path: 'course', component: CourseComponent,  data: { title: 'Lista de curso' } },

{path: 'course/create', component: CoursePostComponent,  data: { title: 'Cadastro de curso' }},

{path: 'update/course/:id', component: CoursePutComponent,  data: { title: 'Editar curso' }},

{path:  'course/:id', component: CourseGetidComponent,  data: { title: 'Detalhes do curso' }},

// /*----------------------------------student--------------------------------------------------------*/
{path: 'student', component: StudentComponent,  data: { title: 'Lista de curso' } },

{path: 'student/create', component: StudentPostComponent,  data: { title: 'Cadastro de curso' }},

{path: 'update/student/:id', component: StudentPutComponent,  data: { title: 'Editar curso' }},

{path:  'student/:id', component: StudentGetidComponent,  data: { title: 'Detalhes do curso' }},
{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full',
},
{
  path: '404',
  component: P404Component,
  data: {
    title: 'Page 404'
  }
},
{
  path: '500',
  component: P500Component,
  data: {
    title: 'Page 500'
  }
},
{
  path: 'login',
  component: LoginComponent,
  data: {
    title: 'Login Page'
  }
},
{
  path: 'register',
  component: RegisterComponent,
  data: {
    title: 'Register Page'
  }
},
{
  path: '',
  component: DefaultLayoutComponent,
  data: {
    title: 'Home'
  },
  children: [
    {path: 'user', component: UserinicialComponent,  data: { title: 'Lista de usuários' } },
    {
      path: 'base',
      loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
    },
    {
      path: 'buttons',
      loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
    },
    {
      path: 'charts',
      loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'icons',
      loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    },
    {
      path: 'notifications',
      loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
    },
    {
      path: 'theme',
      loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
    },
    {
      path: 'widgets',
      loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
    }
  ]
},
{ path: '**', component: P404Component }

 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
