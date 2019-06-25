import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Service} from '../../../service.service';
import {Teacher} from '../../teacher/teacher-schema';

@Component({
  selector: 'app-course-put',
  templateUrl: './course-put.component.html',
  styleUrls: ['./course-put.component.scss']
})
export class CoursePutComponent implements OnInit {

  dataSource: Teacher[];
  course:FormGroup;
  id : number ;
  name = '';
  city = '';
  peiord = 0;
  teacher : Teacher[];
  result = false;
  constructor(private router: Router, private route: ActivatedRoute, private service: Service, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCourse(this.route.snapshot.params.id);
    this.getTeacher();
    this.course = this.formBuilder.group({
      name: [null, Validators.required],
      city: [null, Validators.required],
      period: [null, Validators.required],
      teacher:[[]],
    });
  }

  getCourse(id) {
    this.service.getFilterCourse(id).subscribe(data => {
      this.id = data[0].id;
      this.course.setValue({
        name: data[0].name,
        period: data[0].period,
        city: data[0].city,
        teacher: data[0].teacher
      });
    });
  }

  putCourse(form) {
    if (!form.period) {
      form.period = 8;
    }
    this.result = true;
    this.service.putCourse(this.id, form)
      .subscribe(res => {
          this.result = false;
          this.router.navigate(['/course/' + this.id]);
        }, (err) => {
          console.log(err);
          this.result = false;
        }
      );
  }

  getTeacher() {
    this.service.getAllTeachers()
    .subscribe(res => {
      this.dataSource = res;
      this.teacher = this.dataSource.map((item: Teacher) => {
        const teacher = new Teacher();
        teacher.id = item.id;
        teacher.name = item.name;
        teacher.lastname = item.lastname;
        teacher.phd = item.phd;
        return teacher;
      });
    }, err => {
      console.log(err);
      this.result = false;
    });
  }

}
