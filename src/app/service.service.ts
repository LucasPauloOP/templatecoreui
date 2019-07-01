import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {User} from './container/user/user-schema';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Teacher } from './container/teacher/teacher-schema';
import { Course } from './container/course/course-schema';
import { Student} from './container/student/student-schema'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','authorization': `Bearer ${localStorage.getItem('authorization')}`})
};

const baseApiJWT = 'https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1.1'
const baseApi = 'https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1';

@Injectable({

  providedIn: 'root'

})

export class Service {
  constructor(private http: HttpClient) { }

  // private getHeaders() {
  //   return {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
        
  //     })
  //   };
  // }


  /*------------------------User----------------------------------------------*/
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseApiJWT}/JSON/user`||`${baseApi}/JSON/user`,httpOptions)
      .pipe(tap(user => console.log('Leu usuários')),
      // catchError(this.handleError('getAllUsers',[])) 
      );
    }

  getFilterUser(id:number): Observable<User>{
    const url = `${baseApiJWT}/JSON/user/${id}`||`${baseApi}/JSON/user/${id}`;
    return this.http.get<User>(url,httpOptions).pipe(tap(_ => console.log('Achou um usuário id=${id}')),
    // catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(`${baseApiJWT}/user`||`${baseApi}/user`, user, httpOptions)
      .pipe(tap((user: User) => console.log('Usuário cadastrado com w/ id=${user.id}' )
      )//,catchError(this.handleError<User>('postUser')));
       ) }
  putUser(id,user:User): Observable<any> {
    const url = `${baseApiJWT}/user/${id}`||`${baseApi}/user/${id}`;
    return this.http.put(url,user,httpOptions)

      }

  deleteUser(id): Observable<User> {
    const url = `${baseApiJWT}/User/${id}`||`${baseApi}/user/${id}`;

    return this.http.delete<User>(url, httpOptions)
  }

  /*--------------------------Teacher------------------------------------------------------*/
  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${baseApiJWT}/JSON/teacher`||`${baseApi}/JSON/teacher`,httpOptions)
    }

  getFilterTeacher(id:number): Observable<Teacher>{
    const url = `${baseApiJWT}/JSON/teacher/${id}`||`${baseApi}/JSON/teacher/${id}`;
    return this.http.get<Teacher>(url,httpOptions)
  }

  postTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${baseApiJWT}/teacher`||`${baseApi}/JSON/teacher`, teacher, httpOptions)
  }
  putTeacher(id,teacher:Teacher): Observable<any> {
    const url = `${baseApiJWT}/teacher/${id}`||`${baseApi}/teacher/${id}`;
    return this.http.put(url,teacher,httpOptions)
  }

  deleteTeacher(id): Observable<Teacher> {
    const url = `${baseApiJWT}/teacher/${id}`||`${baseApi}/teacher/${id}`;

    return this.http.delete<Teacher>(url, httpOptions)
  }

  /*-------------------------------------Course----------------------------------------------*/
  getAllCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseApiJWT}/JSON/course`||`${baseApi}/JSON/course`,httpOptions)
    }

  getFilterCourse(id:number): Observable<Course>{
    const url = `${baseApiJWT}/JSON/course/${id}`||`${baseApi}/JSON/course/${id}`;
    return this.http.get<Course>(url,httpOptions)
  }

  postCourse(course): Observable<Course> {
    return this.http.post<Course>(`${baseApiJWT}/course`||`${baseApi}/course`, course, httpOptions)
  }
  putCourse(id,course:Course): Observable<any> {
    const url = `${baseApiJWT}/course/${id}`||`${baseApi}/JSON/course/${id}`;
    return this.http.put(url,course,httpOptions)
  }

  deleteCourse(id): Observable<Course> {
    const url = `${baseApiJWT}/course/${id}`||`${baseApi}/JSON/course/${id}`;

    return this.http.delete<Course>(url, httpOptions)
  }

  //--------------------------------------Student-------------------------------------------------------
  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(`${baseApiJWT}/JSON/student`||`${baseApi}/JSON/student`,httpOptions)
    }

  getFilterStudent(id:number): Observable<Student>{
    const url = `${baseApiJWT}/JSON/student/${id}`||`${baseApi}/JSON/student/${id}`;
    return this.http.get<Student>(url,httpOptions)
  }

  postStudent(student): Observable<Student> {
    return this.http.post<Student>(`${baseApiJWT}/student`||`${baseApi}/JSON/student`, student, httpOptions)
  }
  putStudent(id,student): Observable<any> {
    const url = `${baseApiJWT}/student/${id}`||`${baseApi}/student/${id}`;
    return this.http.put(url,student,httpOptions)
  }

  deleteStudent(id): Observable<Student> {
    const url = `${baseApiJWT}/student/${id}`||`${baseApi}/student/${id}`;

    return this.http.delete<Student>(url, httpOptions)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
