import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

/*user*/
import { UserinicialComponent } from './container/user/userinicial/userinicial.component';
import { UserPostComponent } from './container/user/user-post/user-post.component';
import { UserPutComponent } from './container/user/user-put/user-put.component';
import { UserGetidComponent } from './container/user/user-getid/user-getid.component';
/*teacher*/
import { TeacherComponent } from './container/teacher/teacher/teacher.component';
import { TeacherPostComponent } from './container/teacher/teacher-post/teacher-post.component';
import { TeacherPutComponent } from './container/teacher/teacher-put/teacher-put.component';
import { TeacherGetidComponent } from './container/teacher/teacher-getid/teacher-getid.component';
/*course*/
import { CourseComponent } from './container/course/course/course.component';
import { CoursePostComponent } from './container/course/course-post/course-post.component';
import { CoursePutComponent } from './container/course/course-put/course-put.component';
import { CourseGetidComponent } from './container/course/course-getid/course-getid.component';
/*student*/
import { StudentGetidComponent } from './container/student/student-getid/student-getid.component';
import { StudentComponent } from './container/student/student/student.component';
import { StudentPostComponent } from './container/student/student-post/student-post.component';
import { StudentPutComponent } from './container/student/student-put/student-put.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,  
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    UserinicialComponent,
    UserPostComponent,
    UserPutComponent,
    UserGetidComponent,
    TeacherComponent,
    TeacherPostComponent,
    TeacherPutComponent,
    TeacherGetidComponent,
    CourseComponent,
    CoursePostComponent,
    CoursePutComponent,
    CourseGetidComponent,
    StudentGetidComponent,
    StudentComponent,
    StudentPostComponent,
    StudentPutComponent,
    
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
