import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Contact {
  name: string;
  email: string;
  phone: string;
  moveDate: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  newUser: Contact = {
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    message: ''
  };

  users: any[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('Initializing ContactComponent, fetching users...');
    this.getUsers();
  }

  getUsers(): void {
    console.log('Attempting to fetch users from API...');
    
    this.apiService.getUsers().subscribe({
      next: (res) => {
        console.log('Users fetched successfully:', {
          timestamp: new Date().toISOString(),
          dataReceived: res,
          dataType: Array.isArray(res) ? 'array' : typeof res
        });
        
        this.users = res;
        
        console.log('Processed users data:', {
          storedUsers: this.users,
          count: this.users.length
        });
      },
      error: (err) => {
        console.error('Error loading users:', {
          timestamp: new Date().toISOString(),
          errorDetails: err,
          attemptedEndpoint: 'apiService.getUsers()'
        });
        this.errorMessage = 'Failed to load contacts';
      }
    });
  }

  addUser(): void {
    console.log('Attempting to add user:', {
      timestamp: new Date().toISOString(),
      userData: this.newUser
    });

    const { name, email, phone, moveDate } = this.newUser;
    
    if (!name.trim() || !email.trim() || !phone.trim() || !moveDate) {
      console.warn('Validation failed - missing required fields:', {
        missingFields: {
          name: !name.trim(),
          email: !email.trim(),
          phone: !phone.trim(),
          moveDate: !moveDate
        }
      });
      this.errorMessage = 'Please fill in all required fields';
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';

    this.apiService.addUser(this.newUser).subscribe({
      next: (response) => {
        console.log('User added successfully:', {
          timestamp: new Date().toISOString(),
          serverResponse: response,
          submittedData: this.newUser
        });
        
        this.successMessage = 'Contact submitted successfully!';
        this.newUser = { 
          name: '', 
          email: '', 
          phone: '', 
          moveDate: '', 
          message: '' 
        };
        
        console.log('Refreshing user list...');
        this.getUsers();
      },
      error: (err) => {
        console.error('Error adding contact:', {
          timestamp: new Date().toISOString(),
          errorDetails: err,
          attemptedData: this.newUser
        });
        this.errorMessage = 'Failed to submit contact. Please try again.';
      }
    });
  }
}