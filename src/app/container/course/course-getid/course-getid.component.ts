import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Service} from '../../../service.service'
import {Course} from  '../course-schema'

@Component({
  selector: 'app-course-getid',
  templateUrl: './course-getid.component.html',
  styleUrls: ['./course-getid.component.scss']
})
export class CourseGetidComponent implements OnInit {

  course: Course = { id: 0, name: '', period: 0, city: '', teacher: []};
  result = true;
  constructor( private router: Router, private route: ActivatedRoute, private service: Service) { }

  ngOnInit() {
    this.getCourse(this.route.snapshot.params['id']);
  }

  getCourse(id){
    this.service.getFilterCourse(id)
    .subscribe(data => {
      this.course=data[0];
      console.log(this.course);
      this.result = false
    })
  }

  deleteCourse(id){
    this.result=true;
    this.service.deleteCourse(id)
    .subscribe(res=>{
      this.result=true;
      this.router.navigate(['/course']); 
    }),(err)=>{
      console.log(err);
      this.result=false;
    }
  }

}
