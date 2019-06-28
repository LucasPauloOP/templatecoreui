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
const baseApiJWT = 'https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1.1'

@Injectable({
  providedIn: 'root'
})

export class Service {
  constructor(private http: HttpClient) { }


  /*------------------------User----------------------------------------------*/
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseApi}/JSON/user`||`${baseApiJWT}/JSON/user`,httpOptions)
      .pipe(tap(user => console.log('Leu usuários')),
      // catchError(this.handleError('getAllUsers',[])) 
      );
    }

  getFilterUser(id:number): Observable<User>{
    const url = `${baseApi}/JSON/user/${id}`||`${baseApiJWT}/JSON/user/${id}`;
    return this.http.get<User>(url,httpOptions).pipe(tap(_ => console.log('Achou um usuário id=${id}')),
    // catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(`${baseApi}/user`||`${baseApiJWT}/user`, user, httpOptions)
      .pipe(tap((user: User) => console.log('Usuário cadastrado com w/ id=${user.id}' )
      )//,catchError(this.handleError<User>('postUser')));
       ) }
  putUser(id,user:User): Observable<any> {
    const url = `${baseApi}/user/${id}`||`${baseApiJWT}/user/${id}`;
    return this.http.put(url,user,httpOptions)

      }

  deleteUser(id): Observable<User> {
    const url = `${baseApi}/User/${id}`||`${baseApiJWT}/user/${id}`;

    return this.http.delete<User>(url, httpOptions)
  }

  /*--------------------------Teacher------------------------------------------------------*/
  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${baseApi}/JSON/teacher`||`${baseApiJWT}/JSON/teacher`,httpOptions)
    }

  getFilterTeacher(id:number): Observable<Teacher>{
    const url = `${baseApi}/JSON/teacher/${id}`||`${baseApiJWT}/JSON/teacher/${id}`;
    return this.http.get<Teacher>(url,httpOptions)
  }

  postTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${baseApi}/teacher`||`${baseApiJWT}/JSON/teacher`, teacher, httpOptions)
  }
  putTeacher(id,teacher:Teacher): Observable<any> {
    const url = `${baseApi}/teacher/${id}`||`${baseApiJWT}/teacher/${id}`;
    return this.http.put(url,teacher,httpOptions)
  }

  deleteTeacher(id): Observable<Teacher> {
    const url = `${baseApi}/teacher/${id}`||`${baseApiJWT}/teacher/${id}`;

    return this.http.delete<Teacher>(url, httpOptions)
  }

  /*-------------------------------------Course----------------------------------------------*/
  getAllCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseApi}/JSON/course`||`${baseApiJWT}/JSON/course`,httpOptions)
    }

  getFilterCourse(id:number): Observable<Course>{
    const url = `${baseApi}/JSON/course/${id}`||`${baseApiJWT}/JSON/course/${id}`;
    return this.http.get<Course>(url,httpOptions)
  }

  postCourse(course): Observable<Course> {
    return this.http.post<Course>(`${baseApi}/course`||`${baseApiJWT}/course`, course, httpOptions)
  }
  putCourse(id,course:Course): Observable<any> {
    const url = `${baseApi}/course/${id}`||`${baseApiJWT}/JSON/course/${id}`;
    return this.http.put(url,course,httpOptions)
  }

  deleteCourse(id): Observable<Course> {
    const url = `${baseApi}/course/${id}`||`${baseApiJWT}/JSON/course/${id}`;

    return this.http.delete<Course>(url, httpOptions)
  }

  //--------------------------------------Student-------------------------------------------------------
  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(`${baseApi}/JSON/student`||`${baseApiJWT}/JSON/student`,httpOptions)
    }

  getFilterStudent(id:number): Observable<Student>{
    const url = `${baseApi}/JSON/student/${id}`||`${baseApiJWT}/JSON/student/${id}`;
    return this.http.get<Student>(url,httpOptions)
  }

  postStudent(student): Observable<Student> {
    return this.http.post<Student>(`${baseApi}/student`||`${baseApiJWT}/JSON/student`, student, httpOptions)
  }
  putStudent(id,student): Observable<any> {
    const url = `${baseApi}/student/${id}`||`${baseApiJWT}/student/${id}`;
    return this.http.put(url,student,httpOptions)
  }

  deleteStudent(id): Observable<Student> {
    const url = `${baseApi}/student/${id}`||`${baseApiJWT}/student/${id}`;

    return this.http.delete<Student>(url, httpOptions)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
