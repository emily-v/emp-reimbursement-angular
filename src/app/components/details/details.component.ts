import { Component, OnInit } from '@angular/core';
import { IExpense } from 'src/app/shared/interfaces';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  expense: IExpense;

  constructor(private dataService: DataService,
                private route: ActivatedRoute) { }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getExpense(id).subscribe((expense: IExpense) => {
      this.expense = expense;
    })
  }

}
