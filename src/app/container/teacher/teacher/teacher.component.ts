import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators,ReactiveFormsModule} from '@angular/forms';
import {Service} from '../../../service.service';
import {Teacher} from '../teacher-schema';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'lastname', 'phd', 'action'];
  dataSource: MatTableDataSource<Teacher>;
  isLoadingResults = true;

  teacher: FormGroup;
  name = '';
  lastname = '';
  phd = false;
  result = false;

  constructor(private service: Service, private router:Router, private formBuilder: FormBuilder ) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getTeacher();

      this.teacher = this.formBuilder.group({
        name: [null, Validators.required],
        lastname: [null, Validators.required],
        phd: [null, Validators.required]
      });
  }

  postTeacher(form: NgForm){
    this.result = true;
    this.service.postTeacher(form).subscribe(res => {
      this.result = false;
      this.router.navigate(['/teacher']);
      this.getTeacher();
    }, (err) =>{
      console.log(err);
      this.result = false;
    });
  }

  getTeacher(){
    this.service.getAllTeachers()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Teacher>(res);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
