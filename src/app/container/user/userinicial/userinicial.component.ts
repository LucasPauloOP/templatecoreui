import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators,ReactiveFormsModule} from '@angular/forms';
import {Service} from '../../../service.service';
import {User} from '../user-schema';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { count } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {ChartsModule} from 'ng2-charts'

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

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  
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

