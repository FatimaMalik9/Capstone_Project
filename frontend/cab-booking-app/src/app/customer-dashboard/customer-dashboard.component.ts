import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  availableAreas: any[] = []; // To store fetched areas

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAvailableAreas();
  }

  fetchAvailableAreas(): void {
    this.http.get<any[]>('http://localhost:3000/api/available-areas').subscribe({
      next: (areas) => {
        this.availableAreas = areas;
      },
      error: (err) => {
        console.error('Error fetching available areas:', err);
      }
    });
  }
}
