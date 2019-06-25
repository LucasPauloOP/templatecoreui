import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Service} from '../../../service.service';
import {Teacher} from '../teacher-schema'

@Component({
  selector: 'app-teacher-getid',
  templateUrl: './teacher-getid.component.html',
  styleUrls: ['./teacher-getid.component.scss']
})
export class TeacherGetidComponent implements OnInit {

  teacher: Teacher= { id:null, name:'', lastname:'', phd:null}
  result = true;
  constructor( private router: Router, private route: ActivatedRoute, private service: Service) { }

  ngOnInit() {
    this.getTeacher(this.route.snapshot.params['id']);
  }

  getTeacher(id){
    this.service.getFilterTeacher(id)
    .subscribe(data => {
      this.teacher=data[0];
      console.log(this.teacher);
      this.result = false
    })
  }

  deleteTeacher(id){
    this.result=true;
    this.service.deleteTeacher(id)
    .subscribe(res=>{
      this.result=true;
      this.router.navigate(['/teacher']); 
    }),(err)=>{
      console.log(err);
      this.result=false;
    }
  }

}

