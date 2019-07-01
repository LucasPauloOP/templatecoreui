import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {User} from './container/user/user-schema';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Teacher } from './container/teacher/teacher-schema';
import { Course } from './container/course/course-schema';
import { Student} from './container/student/student-schema'

// const this.getHeaders() = {
//   headers: new HttpHeaders({'Content-Type': 'application/json','authorization': `Bearer ${localStorage.getItem('authorization')}`
// })
// };


const baseApiJWT = 'https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1.1'
const baseApi = 'https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1.1';

@Injectable({

  providedIn: 'root'

})

export class Service {

private getHeaders() {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('authorization')}`
    })
  };
}

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
    return this.http.get<User[]>(`${baseApiJWT}/JSON/user`||`${baseApi}/JSON/user`,this.getHeaders())
      .pipe(tap(user => console.log('Leu usuários')),
      // catchError(this.handleError('getAllUsers',[])) 
      );
    }

  getFilterUser(id:number): Observable<User>{
    const url = `${baseApiJWT}/JSON/user/${id}`||`${baseApi}/JSON/user/${id}`;
    return this.http.get<User>(url,this.getHeaders()).pipe(tap(_ => console.log('Achou um usuário id=${id}')),
    // catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(`${baseApiJWT}/user`||`${baseApi}/user`, user, this.getHeaders())
      .pipe(tap((user: User) => console.log('Usuário cadastrado com w/ id=${user.id}' )
      )//,catchError(this.handleError<User>('postUser')));
       ) }
  putUser(id,user:User): Observable<any> {
    const url = `${baseApiJWT}/user/${id}`||`${baseApi}/user/${id}`;
    return this.http.put(url,user,this.getHeaders())

      }

  deleteUser(id): Observable<User> {
    const url = `${baseApiJWT}/User/${id}`||`${baseApi}/user/${id}`;

    return this.http.delete<User>(url, this.getHeaders())
  }

  /*--------------------------Teacher------------------------------------------------------*/
  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${baseApiJWT}/JSON/teacher`||`${baseApi}/JSON/teacher`,this.getHeaders())
    }

  getFilterTeacher(id:number): Observable<Teacher>{
    const url = `${baseApiJWT}/JSON/teacher/${id}`||`${baseApi}/JSON/teacher/${id}`;
    return this.http.get<Teacher>(url,this.getHeaders())
  }

  postTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${baseApiJWT}/teacher`||`${baseApi}/JSON/teacher`, teacher, this.getHeaders())
  }
  putTeacher(id,teacher:Teacher): Observable<any> {
    const url = `${baseApiJWT}/teacher/${id}`||`${baseApi}/teacher/${id}`;
    return this.http.put(url,teacher,this.getHeaders())
  }

  deleteTeacher(id): Observable<Teacher> {
    const url = `${baseApiJWT}/teacher/${id}`||`${baseApi}/teacher/${id}`;

    return this.http.delete<Teacher>(url, this.getHeaders())
  }

  /*-------------------------------------Course----------------------------------------------*/
  getAllCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseApiJWT}/JSON/course`||`${baseApi}/JSON/course`,this.getHeaders())
    }

  getFilterCourse(id:number): Observable<Course>{
    const url = `${baseApiJWT}/JSON/course/${id}`||`${baseApi}/JSON/course/${id}`;
    return this.http.get<Course>(url,this.getHeaders())
  }

  postCourse(course): Observable<Course> {
    return this.http.post<Course>(`${baseApiJWT}/course`||`${baseApi}/course`, course, this.getHeaders())
  }
  putCourse(id,course:Course): Observable<any> {
    const url = `${baseApiJWT}/course/${id}`||`${baseApi}/JSON/course/${id}`;
    return this.http.put(url,course,this.getHeaders())
  }

  deleteCourse(id): Observable<Course> {
    const url = `${baseApiJWT}/course/${id}`||`${baseApi}/JSON/course/${id}`;

    return this.http.delete<Course>(url, this.getHeaders())
  }

  //--------------------------------------Student-------------------------------------------------------
  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(`${baseApiJWT}/JSON/student`||`${baseApi}/JSON/student`,this.getHeaders())
    }

  getFilterStudent(id:number): Observable<Student>{
    const url = `${baseApiJWT}/JSON/student/${id}`||`${baseApi}/JSON/student/${id}`;
    return this.http.get<Student>(url,this.getHeaders())
  }

  postStudent(student): Observable<Student> {
    return this.http.post<Student>(`${baseApiJWT}/student`||`${baseApi}/JSON/student`, student, this.getHeaders())
  }
  putStudent(id,student): Observable<any> {
    const url = `${baseApiJWT}/student/${id}`||`${baseApi}/student/${id}`;
    return this.http.put(url,student,this.getHeaders())
  }

  deleteStudent(id): Observable<Student> {
    const url = `${baseApiJWT}/student/${id}`||`${baseApi}/student/${id}`;

    return this.http.delete<Student>(url, this.getHeaders())
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
