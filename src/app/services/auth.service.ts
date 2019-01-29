import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../shared/interfaces';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    // authenticate(username: string, password: string, success, fail) {
    //     return this.http.post<IUser>('assets/users.json',
    //         JSON.stringify({username: username, password: password}),
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         .toPromise()
    //         .then((resp) => {
    //             localStorage.setItem('authToken', JSON.stringify(resp));
    //             success();
    //         },
    //         (err) => {
    //             fail(err);
    //         });
    //     }


    }

