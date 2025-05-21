import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
users:any[]=[]
constructor (private apiService:ApiService){}
  
ngOnInit(): void {
  this.getUsers()
  }


getUsers():void{
  this.apiService.getStudents().subscribe({
    next:(res)=>this.users=res,
    error:(err)=>console.error('error loading users:',err)
  })
}
}
