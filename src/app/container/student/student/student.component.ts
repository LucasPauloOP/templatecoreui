import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Service} from '../../../service.service';
import {Course} from '../../course/course-schema';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../student-schema'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'lastname', 'age', 'course', 'action'];
  dataSource: MatTableDataSource<Student>;
  isLoadingResults = true;

  dataSourceCourse: Course[];
  student: FormGroup;
  name = '';
  city = '';
  peiord = 0;
  course : Course[];
  result = false;

  constructor(private router: Router, private service: Service, private formBuilder: FormBuilder) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.getStudent();

    this.getCourse();

    this.student = this.formBuilder.group({
      name : [null, Validators.required],
      lastname : [null, Validators.required],
      age : [null, Validators.required],
      course : null,
  }); 
  }

  postStudent(form: NgForm)
  {
    this.result = true;
    this.service.postStudent(form)
    .subscribe(res=>{
      this.result=false;
      this.router.navigate(['/student']);
      this.getStudent();
    },(err)=>{
      console.log(err);
      this.result = false;
    });
  }

  getCourse(){
    this.service.getAllCourse()
    .subscribe(res=>{
      this.dataSourceCourse = res;
      this.course = this.dataSourceCourse.map((item:Course)=>{
         const course = new Course();
         course.id = item.id;
         course.name=item.name;
         course.period=item.period;
         course.city=item.city;
         course.teacher=item.teacher;
         return course; 
      })
    },err => {
        console.log(err);
        this.result = false;
    });
  }
  
  getStudent(){
    this.service.getAllStudent()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Student>(res);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = (data, filter: string)  => {
      const accumulator = (currentTerm, key) => {

        return this.nestedFilterCheck(currentTerm, data, key);

      };

      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  nestedFilterCheck(search, data, key) {
    if (typeof data[key]=== 'object') {
      for (const k in data[key][0]) {
        if(k == 'name'){
          console.log(k);
          if (data[key][k] !== null) {
            search = this.nestedFilterCheck(search, data[key][0], k);
          }
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }


}
