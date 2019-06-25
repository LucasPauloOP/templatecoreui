import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {User} from './container/user/user-schema';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Teacher } from './container/teacher/teacher-schema';
import { Course } from './container/course/course-schema';
import { Student} from './container/student/student-schema'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const baseApi = 'https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1';

@Injectable({
  providedIn: 'root'
})

export class Service {
  constructor(private http: HttpClient) { }


  /*------------------------User----------------------------------------------*/
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseApi}/JSON/user`)
      .pipe(tap(user => console.log('Leu usuários')),
      // catchError(this.handleError('getAllUsers',[])) 
      );
    }

  getFilterUser(id:number): Observable<User>{
    const url = `${baseApi}/JSON/user/${id}`;
    return this.http.get<User>(url).pipe(tap(_ => console.log('Achou um usuário id=${id}')),
    // catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(`${baseApi}/user`, user, httpOptions)
      .pipe(tap((user: User) => console.log('Usuário cadastrado com w/ id=${user.id}' )
      )//,catchError(this.handleError<User>('postUser')));
       ) }
  putUser(id,user:User): Observable<any> {
    const url = `${baseApi}/user/${id}`;
    return this.http.put(url,user,httpOptions)

      }

  deleteUser(id): Observable<User> {
    const url = `${baseApi}/User/${id}`;

    return this.http.delete<User>(url, httpOptions)
  }

  /*--------------------------Teacher------------------------------------------------------*/
  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${baseApi}/JSON/teacher`)
    }

  getFilterTeacher(id:number): Observable<Teacher>{
    const url = `${baseApi}/JSON/teacher/${id}`;
    return this.http.get<Teacher>(url)
  }

  postTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${baseApi}/teacher`, teacher, httpOptions)
  }
  putTeacher(id,teacher:Teacher): Observable<any> {
    const url = `${baseApi}/teacher/${id}`;
    return this.http.put(url,teacher,httpOptions)
  }

  deleteTeacher(id): Observable<Teacher> {
    const url = `${baseApi}/teacher/${id}`;

    return this.http.delete<Teacher>(url, httpOptions)
  }

  /*-------------------------------------Course----------------------------------------------*/
  getAllCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseApi}/JSON/course`)
    }

  getFilterCourse(id:number): Observable<Course>{
    const url = `${baseApi}/JSON/course/${id}`;
    return this.http.get<Course>(url)
  }

  postCourse(course): Observable<Course> {
    return this.http.post<Course>(`${baseApi}/course`, course, httpOptions)
  }
  putCourse(id,course:Course): Observable<any> {
    const url = `${baseApi}/course/${id}`;
    return this.http.put(url,course,httpOptions)
  }

  deleteCourse(id): Observable<Course> {
    const url = `${baseApi}/course/${id}`;

    return this.http.delete<Course>(url, httpOptions)
  }

  //--------------------------------------Student-------------------------------------------------------
  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(`${baseApi}/JSON/student`)
    }

  getFilterStudent(id:number): Observable<Student>{
    const url = `${baseApi}/JSON/student/${id}`;
    return this.http.get<Student>(url)
  }

  postStudent(student): Observable<Student> {
    return this.http.post<Student>(`${baseApi}/student`, student, httpOptions)
  }
  putStudent(id,student): Observable<any> {
    const url = `${baseApi}/student/${id}`;
    return this.http.put(url,student,httpOptions)
  }

  deleteStudent(id): Observable<Student> {
    const url = `${baseApi}/student/${id}`;

    return this.http.delete<Student>(url, httpOptions)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
