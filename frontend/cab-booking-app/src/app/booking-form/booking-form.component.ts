import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent {
  pickupLocation: string = ''; // Bind this property with ngModel
  destination: string = ''; // Bind this property with ngModel
  pickupTime: string = ''; // Bind this property with ngModel

  confirmationMessage: string | null = null; // To store the confirmation message
  bookingDetails: any | null = null; // To store the booking details

  constructor(private http: HttpClient) {}

  confirmBooking() {
    const bookingData = {
      pickupLocation: this.pickupLocation,
      destination: this.destination,
      pickupTime: this.pickupTime,
    };

    this.http.post('http://localhost:3000/api/bookings', bookingData).subscribe({
      next: (response: any) => {
        this.confirmationMessage = response.message;
        this.bookingDetails = response.bookingDetails;
      },
      error: (error) => {
        console.error('Error confirming booking:', error);
        this.confirmationMessage = 'Error confirming booking: ' + error.message;
        this.bookingDetails = null;
      },
    });
  }
}
