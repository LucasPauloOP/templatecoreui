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

const routes: Routes = [

/*-----------------------------------user----------------------------------------------------------*/
{path: 'user', component: UserinicialComponent,  data: { title: 'Lista de usuários' } },

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

 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
