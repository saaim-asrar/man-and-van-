import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private baseUrl= {
    users:"http://localhost:3004/users"
  }
  constructor(private http:HttpClient) {}
    getUsers(){
      return this.http.get<any[]>(this.baseUrl.users)
    }

addUser(user:any){
return this.http.post<any[]>(this.baseUrl.users,user);
}

}
