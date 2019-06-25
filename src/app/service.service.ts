import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {User} from './container/user/user-schema';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Teacher } from './container/teacher/teacher-schema';
import { Course } from './container/course/course-Schema';
import { Student} from './container/student/studen-schema'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const baseApi = '/api';

@Injectable({
  providedIn: 'root'
})

export class Service {
  constructor(private http: HttpClient) { }


  /*------------------------User----------------------------------------------*/
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseApi}/JSON/user`)
      .pipe(tap(user => console.log('Leu usuários')),
      catchError(this.handleError('getAllUsers',[])) 
      );
    }

  getFilterUser(id:number): Observable<User>{
    const url = `${baseApi}/JSON/user/${id}`;
    return this.http.get<User>(url).pipe(tap(_ => console.log('Achou um usuário id=${id}')),
    catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(`${baseApi}/user`, user, httpOptions)
      .pipe(tap((user: User) => console.log('Usuário cadastrado com w/ id=${user.id}' )
      ),catchError(this.handleError<User>('postUser')));
  }
  putUser(id,user): Observable<User> {
    const url = `${baseApi}/user/${id}`;
    return this.http.put(url,user,httpOptions)
      .pipe(tap(_ => console.log('atualiza um usuário com id = ${id}' ))
      ,catchError(this.handleError<any>('putUser')));
  }

  deleteUser(id): Observable<User> {
    const url = `${baseApi}/User/${id}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  /*--------------------------Teacher------------------------------------------------------*/
  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${baseApi}/JSON/teacher`)
      .pipe(tap(teacher => console.log('Leu professores')),
      catchError(this.handleError('getAllTeachers',[])) 
      );
    }

  getFilterTeacher(id:number): Observable<Teacher>{
    const url = `${baseApi}/JSON/teacher/${id}`;
    return this.http.get<Teacher>(url).pipe(tap(_ => console.log('Achou um usuário id=${id}')),
    catchError(this.handleError<Teacher>(`getTeacher id=${id}`))
    );
  }

  postTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${baseApi}/teacher`, teacher, httpOptions)
      .pipe(tap((teacher: Teacher) => console.log('professor cadastrado com w/ id=${teacher.id}' )
      ),catchError(this.handleError<Teacher>('postTeacher')));
  }
  putTeacher(id,teacher): Observable<Teacher> {
    const url = `${baseApi}/teacher/${id}`;
    return this.http.put(url,teacher,httpOptions)
      .pipe(tap(_ => console.log('atualiza um professor com id = ${id}' ))
      ,catchError(this.handleError<any>('putTeacher')));
  }

  deleteTeacher(id): Observable<Teacher> {
    const url = `${baseApi}/teacher/${id}`;

    return this.http.delete<Teacher>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o professor com id=${id}`)),
      catchError(this.handleError<Teacher>('deleteTeacher'))
    );
  }

  /*-------------------------------------Course----------------------------------------------*/
  getAllCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseApi}/JSON/course`)
      .pipe(tap(course => console.log('Leu cursos')),
      catchError(this.handleError('getAllCourse',[])) 
      );
    }

  getFilterCourse(id:number): Observable<Course>{
    const url = `${baseApi}/JSON/course/${id}`;
    return this.http.get<Course>(url).pipe(tap(_ => console.log('Achou um curso id=${id}')),
    catchError(this.handleError<Course>(`getCourse id=${id}`))
    );
  }

  postCourse(course): Observable<Course> {
    return this.http.post<Course>(`${baseApi}/course`, course, httpOptions)
      .pipe(tap((course: Course) => console.log('curso cadastrado com w/ id=${course.id}' )
      ),catchError(this.handleError<Course>('postCourse')));
  }
  putCourse(id,course): Observable<Course> {
    const url = `${baseApi}/course/${id}`;
    return this.http.put(url,course,httpOptions)
      .pipe(tap(_ => console.log('atualiza um curso com id = ${id}' ))
      ,catchError(this.handleError<any>('putCourse')));
  }

  deleteCourse(id): Observable<Course> {
    const url = `${baseApi}/course/${id}`;

    return this.http.delete<Course>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o curso com id=${id}`)),
      catchError(this.handleError<Course>('deleteCourse'))
    );
  }

  //--------------------------------------Student-------------------------------------------------------
  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(`${baseApi}/JSON/student`)
      .pipe(tap(student => console.log('Leu cursos')),
      catchError(this.handleError('getAllStudent',[])) 
      );
    }

  getFilterStudent(id:number): Observable<Student>{
    const url = `${baseApi}/JSON/student/${id}`;
    return this.http.get<Student>(url).pipe(tap(_ => console.log('Achou um curso id=${id}')),
    catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

  postStudent(student): Observable<Student> {
    return this.http.post<Student>(`${baseApi}/student`, student, httpOptions)
      .pipe(tap((student: Student) => console.log('curso cadastrado com w/ id=${student.id}' )
      ),catchError(this.handleError<Student>('postStudent')));
  }
  putStudent(id,student): Observable<Student> {
    const url = `${baseApi}/student/${id}`;
    return this.http.put(url,student,httpOptions)
      .pipe(tap(_ => console.log('atualiza um curso com id = ${id}' ))
      ,catchError(this.handleError<any>('putStudent')));
  }

  deleteStudent(id): Observable<Student> {
    const url = `${baseApi}/student/${id}`;

    return this.http.delete<Student>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o curso com id=${id}`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }
