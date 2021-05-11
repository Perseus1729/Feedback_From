import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { getMaxListeners } from 'process';
import{ User } from './user'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{
  createDb(){
    const userList:User[]=[
    ];
    return {userList};
  }
}