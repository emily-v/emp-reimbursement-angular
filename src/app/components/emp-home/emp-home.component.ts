import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IExpense } from 'src/app/shared/interfaces';
import { Form } from 'src/app/models/Form';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-emp-home',
  templateUrl: './emp-home.component.html',
  styleUrls: ['./emp-home.component.css']
})
export class EmpHomeComponent implements OnInit {
currUser: string = localStorage.getItem('currUser');
  email: string = JSON.parse(this.currUser).email;
  requests: IExpense[];

//  form: Form;
//   formArr : Form;
//   constructor( private dataService: DataService, private formservice: FormService) {
//   this.form = new Form();
//     this.form.empid = this.email;
//   this.formservice.getAllUserForm(this.form).subscribe( (data) => {   this.setFormData(data) });
  
  
//    }
//     setFormData(data){
//    this.formArr = data;
//    console.log(this.formArr[0]);
   
//    }

constructor( private dataService: DataService) { }




  ngOnInit() {
   this.dataService.getExpenses()
     .subscribe((expenses: IExpense[]) => this.requests = expenses);
      
  }

}
