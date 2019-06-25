import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Service} from '../../../service.service';
import {Course} from '../../course/course-schema'

@Component({
  selector: 'app-student-put',
  templateUrl: './student-put.component.html',
  styleUrls: ['./student-put.component.scss']
})
export class StudentPutComponent implements OnInit {

  dataSource: Course[];
  id = 0;
  student: FormGroup;
  name = '';
  lastName = '';
  age = 0;
  course: Course[];
  result = false;
  constructor(private router: Router, private route: ActivatedRoute, private service: Service, private formBuilder: FormBuilder) { }


 ngOnInit() {
   this.getStudent(this.route.snapshot.params.id);
    this.getCourse();
    this.student = this.formBuilder.group({
      name : [null, Validators.required],
      lastname : [null, Validators.required],
      age : [null, Validators.required],
      course : null,
  });
}
getStudent(id) {
  this.service.getFilterStudent(id).subscribe(data => {
    this.id = data[0].id;
    this.student.setValue({
      name: data[0].name,
      lastname: data[0].lastname,
      age: data[0].age,
      course: data[0].course
    });
  });
}

putStudent(form: NgForm) {
  this.result = true;
  this.service.putStudent(this.id, form)
    .subscribe(res => {
        this.result = false;
        this.router.navigate(['/student/' + this.id]);
      }, (err) => {
        console.log(err);
        this.result = false;
      }
    );
}

getCourse() {
  this.service.getAllCourse()
  .subscribe(res => {
    this.dataSource = res;
    this.course = this.dataSource.map((item: Course) => {
      const course = new Course();
      course.id = item.id;
      course.name = item.name;
      course.period = item.period;
      course.city = item.city;
      course.teacher = item.teacher;
      return course;
    });
  }, err => {
    console.log(err);
    this.result = false;
  });
}

}
