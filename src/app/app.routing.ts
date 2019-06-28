import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*user*/
import {UserinicialComponent} from './container/user/userinicial/userinicial.component';
import {UserPostComponent} from './container/user/user-post/user-post.component';
import {UserPutComponent} from './container/user/user-put/user-put.component';
import {UserGetidComponent} from './container/user/user-getid/user-getid.component' 

/*teacher*/
import{TeacherComponent} from './container/teacher/teacher/teacher.component';
import{TeacherPutComponent} from './container/teacher/teacher-put/teacher-put.component';
import{TeacherGetidComponent} from './container/teacher/teacher-getid/teacher-getid.component';

// /*course*/
import {CourseComponent} from './container/course/course/course.component';
import {CoursePutComponent} from './container/course/course-put/course-put.component';
import {CourseGetidComponent} from './container/course/course-getid/course-getid.component';

// /*student*/
import {StudentComponent} from './container/student/student/student.component'
import {StudentPutComponent} from './container/student/student-put/student-put.component'
import {StudentGetidComponent} from './container/student/student-getid/student-getid.component'

import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { CallbackComponentComponent } from '../app/callback-component/callback-component.component';
import { RegisterComponent } from './views/register/register.component';
import {LoginComponent} from './views/login/login.component';

const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponentComponent,
    data: {
      title: 'carregamento Page'
    }
  },

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },

  // {
  //     path: 'logout',
  //     component:
  // },

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
  path: 'callback',
  component: CallbackComponentComponent,
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
  
    /*user*/
    {path:  'user/:id', component:UserGetidComponent,  data: { title: 'Detalhes do usuário' }},

    {path: 'user', component: UserinicialComponent,  data: { title: 'Lista de usuários' } },

    {path: 'user/update/:id', component: UserPutComponent,  data: { title: 'Editar usuário' }},

    /*teacher*/
    {path: 'teacher', component: TeacherComponent,  data: { title: 'Lista de professors' } },

    {path: 'teacher/update/:id', component: TeacherPutComponent,  data: { title: 'Editar professor' }},

    {path:  'teacher/:id', component:TeacherGetidComponent,  data: { title: 'Detalhes do professor' }}, 

    /*course*/
    {path: 'course', component: CourseComponent,  data: { title: 'Lista de curso' } },

    {path: 'update/course/:id', component: CoursePutComponent,  data: { title: 'Editar curso' }},

    {path:  'course/:id', component: CourseGetidComponent,  data: { title: 'Detalhes do curso' }},

    /*student*/
    {path: 'student', component: StudentComponent,  data: { title: 'Lista de curso' } },

    {path: 'update/student/:id', component: StudentPutComponent,  data: { title: 'Editar curso' }},

    {path:  'student/:id', component: StudentGetidComponent,  data: { title: 'Detalhes do curso' }},


    {
      path: 'dashboard',
      loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
    },


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
