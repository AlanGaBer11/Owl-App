import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDataSubject = new BehaviorSubject<any>(null); 
  userData$ = this.userDataSubject.asObservable(); 

  constructor() { }

  setUserData(userData: any){
    this.userDataSubject.next(userData); 
  }

  getUserData(){
    return this.userDataSubject.value; 
  }
}
