import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Service} from '../../../service.service'
import {Student} from '../student-schema'

@Component({
  selector: 'app-student-getid',
  templateUrl: './student-getid.component.html',
  styleUrls: ['./student-getid.component.scss']
})

export class StudentGetidComponent implements OnInit {
  student: Student = { id: 0, name: '', lastname: '', age: 0, course: null};
  result = true;
  constructor(private router: Router, private route: ActivatedRoute, private service: Service) { }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params.id);
  }

  getStudent(id) {
    this.service.getFilterStudent(id)
      .subscribe(data => {
        this.result = false;
        if (data) {
        this.student = data[0];
        }
      });
  }

  deleteStudent(id) {
    this.result = true;
    this.service.deleteStudent(id)
      .subscribe(res => {
          this.result = false;
          this.router.navigate(['/student']);
        },(err) => {
          console.log(err);
          this.result = false;
        }
      );
  }

}
