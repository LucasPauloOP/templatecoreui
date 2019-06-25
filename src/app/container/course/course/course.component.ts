import { Component, OnInit, ViewChild } from '@angular/core';
import {Service} from '../../../service.service';
import {Course} from  '../course-schema';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Teacher} from '../../teacher/teacher-schema'
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'city', 'period', 'teacher','action'];
  dataSource: MatTableDataSource<Course>;
  isLoadingResults = true;

dataSourceTeacher: Teacher[];
  course:FormGroup;
  name = '';
  city = '';
  peiord = 0;
  teacher : Teacher[];
  result = false;

  constructor(private router: Router, private service: Service, private formBuilder: FormBuilder) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getCourse();

    this.getTeacher();

    this.course = this.formBuilder.group({
      name: [null, Validators.required],
      city: [null, Validators.required],
      period: [null, Validators.required],
      teacher:[[]],
    });
  }

  postCourse(form: NgForm){
    this.result = true;
    this.service.postCourse(form).subscribe(res => {
      this.result = false;
      this.router.navigate(['/course']);
      this.getCourse();
    }, (err) =>{
      console.log(err);
      this.result = false;
    });
  }

  getTeacher(){
    this.service.getAllTeachers().subscribe(res => {
      this.dataSourceTeacher = res;
      console.log(this.dataSource);
      this.teacher = this.dataSourceTeacher.map((item:Teacher) =>{
        const teacher = new Teacher();
        teacher.id = item.id;
        teacher.name = item.name;
        teacher.lastname = item.lastname;
        teacher.phd = item.phd;
        return teacher;
      });
    },err=>{
      console.log(err);
      this.result = false;
    });
  }

  getCourse(){
    this.service.getAllCourse()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource<Course>(res);
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
      
      for(let aux=0;aux < data[key].length ;aux++)
      {
        
        for (const k in data[key][aux]) {
            
          if(k == 'name'){

            console.log(k);

            if (data[key][k] !== null) {

             search = this.nestedFilterCheck(search, data[key][aux], k);

           }
         }
        
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }


}
