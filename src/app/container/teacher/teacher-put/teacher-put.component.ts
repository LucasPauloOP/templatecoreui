import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Service} from '../../../service.service';

@Component({
  selector: 'app-teacher-put',
  templateUrl: './teacher-put.component.html',
  styleUrls: ['./teacher-put.component.scss']
})
export class TeacherPutComponent implements OnInit {

  id: number;
  teacher: FormGroup;
  name = '';
  lastname = '';
  phd = false;
  result = false;
  constructor( private router: Router, private route: ActivatedRoute, private service: Service, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTeacher(this.route.snapshot.params.id);
    this.teacher = this.formBuilder.group({
   name : [null, Validators.required],
   lastname : [null, Validators.required],
   phd : [null, Validators.required]
 });
 }

 getTeacher(id) {
  this.service.getFilterTeacher(id).subscribe(data => {
    this.id = data[0].id;
    this.teacher.setValue({
      name: data[0].name,
      lastname: data[0].lastname,
      phd: data[0].phd
    });
  });
}

updateTeacher(form) {
  this.result = true;
  this.service.putTeacher(this.id,form)
    .subscribe(res => {
        this.result = false;
        this.router.navigate(['/teacher/' + this.id]);
      }, (err) => {
        console.log(err);
        this.result = false;
      }
    );
}


}
