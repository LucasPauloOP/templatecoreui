import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators,ReactiveFormsModule} from '@angular/forms';
import {Service} from '../../../service.service';
import {User} from '../user-schema';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './userinicial.component.html',
  styleUrls: ['./userinicial.component.scss']
})

export class UserinicialComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'lastname', 'profile', 'action'];
  dataSource: MatTableDataSource<User>;
  isLoadingResults = true;

  constructor(private router: Router, private service: Service, private formBuilder: FormBuilder) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getuser();
      this.user = this.formBuilder.group({
        name: [null, Validators.required],
        lastname: [null, Validators.required],
        profile: [null, Validators.required]
      });
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  user: FormGroup;
  name = '';
  lastname = '';
  profile = '';
  result = false;

  postUser(form: NgForm){
    this.result = true;
    this.service.postUser(form).subscribe(res => {
      this.result = false;
      this.router.navigate(['/user']);
      this.getuser();
    }, (err) =>{
      console.log(err);
      this.result = false;
    });
  }
  getuser(){
    this.service.getAllUsers()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource<User>(res);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}

