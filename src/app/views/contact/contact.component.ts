import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
users:any[]=[]
constructor (private apiService:ApiService){}
  
//ngOnInit(): void {
 // this.getUsers()
 // }
//}
ngOnInit(): void {
  this.apiService.getUsers().subscribe(data =>{
    console.log("this is userdata",data)
           this.users = data;
  })
}

getUsers():void{
  this.apiService.getUsers().subscribe({
    next:(res)=>this.users=res,
    error:(err)=>console.error('error loading users:',err)
  })
}
}