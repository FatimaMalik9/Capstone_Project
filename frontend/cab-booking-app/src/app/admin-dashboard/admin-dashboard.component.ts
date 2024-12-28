import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  cabs: any[] = []; // List of cabs
  bookings: any[] = []; // List of bookings

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch initial data
    this.loadCabs();
    this.loadBookings();
  }

  // Method to load cab data
  loadCabs(): void {
    this.http.get('http://localhost:3000/api/cabs').subscribe({
      next: (response: any) => {
        this.cabs = response;
        console.log('Cabs loaded:', this.cabs);
      },
      error: (err) => console.error('Error loading cabs:', err)
    });
  }

  // Method to load bookings
  loadBookings(): void {
    this.http.get('http://localhost:3000/api/bookings').subscribe({
      next: (response: any) => {
        this.bookings = response;
        console.log('Bookings loaded:', this.bookings);
      },
      error: (err) => console.error('Error loading bookings:', err)
    });
  }

  // Add a new cab
  addCab(): void {
    const newCab = { name: `Cab ${this.cabs.length + 1}`, status: 'Available' };
    this.http.post('http://localhost:3000/api/cabs', newCab).subscribe({
      next: (response: any) => {
        this.cabs.push(response);
        console.log('Cab added:', response);
      },
      error: (err) => console.error('Error adding cab:', err)
    });
  }

  // Toggle cab status
  toggleCabStatus(cab: any): void {
    cab.status = cab.status === 'Available' ? 'Unavailable' : 'Available';
    this.http.put(`http://localhost:3000/api/cabs/${cab.id}`, cab).subscribe({
      next: (response) => console.log('Cab status updated:', response),
      error: (err) => console.error('Error updating cab:', err)
    });
  }
}
