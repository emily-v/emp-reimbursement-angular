// THIS ISNT BEING USED AT ALL??
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IExpense, IUser } from '../../app/shared/interfaces';
// import { User } from '../models/User';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    getExpenses() : Observable<IExpense[]> {
        return this.http.get<IExpense[]>('assets/expenses.json')
            .pipe(
                catchError(this.handleError)
            );
    }
    
    getExpense(expId: number) : Observable<IExpense> {
      return this.http.get<IExpense[]>('assets/expenses.json')
        .pipe(
          map(expenses => {
            let expense = expenses.filter((exp: IExpense) => exp.expId === expId);
            return (expense && expense.length) ? expense[0] : null;
          }),
          catchError(this.handleError)
        )
    }

    // getUser(empId: number) : Observable<IUser> {
    //     return this.http.get<IUser[]>(this.baseUrl + 'users.json')
    //       .pipe(
    //         map(users => {
    //           let user = users.filter((usr: IUser) => usr.empId === empId);
    //           return (user && user.length) ? user[0] : null;
    //         }),
    //         catchError(this.handleError)
    //       )
    //   }

    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
      }
      return Observable.throw(error || 'Node.js server error');
    }
    
//   public getUserData(user: User){
  
//   	return this.http.post<User>('assets/users.json', JSON.stringify(user));
//     // let data = { email: string, password, string}
  
//  }
  
  
	// public insertForm(){
	// console.log('som');
	// user: User;
	// console.log('som');
	// return this.httpClient.post<User>(this.url, JSON.stringify(this.user));
	// }
}