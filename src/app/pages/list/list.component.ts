import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsersList();
  }


  getUsersList(): void {
    const authToken = 'your_authentication_token';  // Replace with the actual token
    const headers = { Authorization: `Bearer ${authToken}` };

    this.http.get<any[]>('http://localhost:8000/api/users', { headers }).subscribe(
      (res) => {
        console.log(res);
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
