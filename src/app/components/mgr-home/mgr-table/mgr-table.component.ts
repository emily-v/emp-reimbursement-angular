import { Component, OnInit, Input } from '@angular/core';
import { IExpense } from 'src/app/shared/interfaces';
import { SorterService } from 'src/app/services/sorter.service';

@Component({
  selector: 'app-mgr-table',
  templateUrl: './mgr-table.component.html',
  styleUrls: ['./mgr-table.component.css']
})
export class MgrTableComponent implements OnInit {

  private _expenses: IExpense[] = [];

  @Input() get expenses(): IExpense[] {
    return this._expenses;
  }

  set expenses(value: IExpense[]) {
    if (value) {
      this.filteredExpenses = this._expenses = value;
    }  
  }

  filteredExpenses: any[] = [];
  
  constructor(private sorterService: SorterService) { }

  ngOnInit() {
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
