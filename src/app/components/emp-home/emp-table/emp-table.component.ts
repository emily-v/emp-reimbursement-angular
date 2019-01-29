import { Component, OnInit, Input } from '@angular/core';

import { IExpense } from 'src/app/shared/interfaces';
import { SorterService } from 'src/app/services/sorter.service';
// import { Expense } from '../../new-exp/new-exp.component';
// import { Form } from 'src/app/models/Form';
// import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.css']
})
export class EmpTableComponent implements OnInit {
// private expense: Expense;
  private _expenses: IExpense[] = [];

  currUser: string = localStorage.getItem('currUser');
  // empid: number = JSON.parse(this.currUser).id;
  email: string = JSON.parse(this.currUser).email;
  // private form: Form;
  @Input() get expenses(): IExpense[] {
    return this._expenses;
  }

  set expenses(value: IExpense[]) {
    if (value) {
      this.filteredExpenses = this._expenses = value;
      // let allExpenses = this._expenses = value;
      // this.filteredExpenses = allExpenses.filter((exp: IExpense) => {
      //   return exp.empId === this.email;
      // })
    }

  }

  filteredExpenses: any[] = [];
  // setFormData(data) {
  //   this._expenses = data;
  //   console.log(JSON.stringify(this._expenses[0].amount));
  // }

  constructor(private sorterService: SorterService
    // , private formService: FormService
    ) { 
    // this.form = new Form();
    // this.form.empid = this.email;
  }

  ngOnInit() {
    // this.expense = new Expense;
  }

  filter(data: string) {
    if (data === "Pending") {
      this.filteredExpenses = this.expenses.filter((exp: IExpense) => {
        return exp.status === 1;
      })
    } else if (data === "Approved") {
      this.filteredExpenses = this.expenses.filter((exp: IExpense) => {
        return exp.status === 2;
      })
    } else if (data === "Denied") {
      this.filteredExpenses = this.expenses.filter((exp: IExpense) => {
        return exp.status === 3;
      })
    } else {
      this.filteredExpenses = this.expenses;
    }
  }

  sort(prop: string) {
    this.sorterService.sort(this.filteredExpenses, prop);
  }


}
