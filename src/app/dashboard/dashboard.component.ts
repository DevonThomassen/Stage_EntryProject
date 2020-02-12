import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  Get() {
    const x = this.http.get('/users?offset=1&limit=1');
    x.subscribe(data => console.log(data));
  }

}
