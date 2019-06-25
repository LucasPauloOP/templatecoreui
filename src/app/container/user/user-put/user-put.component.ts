import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Service} from '../../../service.service';
import {User} from '../user-schema';

@Component({
  selector: 'app-user-put',
  templateUrl: './user-put.component.html',
  styleUrls: ['./user-put.component.scss']
})

export class UserPutComponent implements OnInit {
  id: number;
  user: FormGroup;
  name = '';
  lastname = '';
  profile = '';
  result = false;
  constructor( private router: Router, private route: ActivatedRoute, private service: Service, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params.id);
    this.user = this.formBuilder.group({
   name : [null, Validators.required],
   lastname : [null, Validators.required],
   profile : [null, Validators.required]
 });
 }

 getUser(id) {
  this.service.getFilterUser(id).subscribe(data => {
    this.id = data[0].id;
    this.user.setValue({
      name: data[0].name,
      lastname: data[0].lastname,
      profile: data[0].profile
    });
  });
}

updateUser(form){
  this.result = true;
  this.service.putUser(this.id,form)
  .subscribe(res=>{
    this.result = false;
    this.router.navigate(['/user/'+this.id]);
  },(err)=>{
    console.log(err);
    this.result = false;  
  })
}

}
