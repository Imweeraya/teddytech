import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userId! : string;

  setUserId(id: string) {
    this.userId = id;
  }

  getUserId(): string {
    // return this.userId;
    return '6542a3b25ca952749caa11e3'
  }

  
   
}
