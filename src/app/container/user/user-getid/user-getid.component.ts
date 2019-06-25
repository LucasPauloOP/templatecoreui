import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Service} from '../../../service.service';
import {User} from '../user-schema';

@Component({
  selector: 'app-user-getid',
  templateUrl: './user-getid.component.html',
  styleUrls: ['./user-getid.component.scss']
})
export class UserGetidComponent implements OnInit {
  user: User= { id:null, name:'', lastname:'', profile:''}
  result = true;
  constructor( private router: Router, private route: ActivatedRoute, private service: Service) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
  }

  getUser(id){
    this.service.getFilterUser(id)
    .subscribe(data => {
      this.user=data[0];
      console.log(this.user);
      this.result = false
    })
  }

  deleteUser(id){
    this.result=true;
    this.service.deleteUser(id)
    .subscribe(res=>{
      this.result=true;
      this.router.navigate(['/user']); 
    }),(err)=>{
      console.log(err);
      this.result=false;
    }
  }

}
