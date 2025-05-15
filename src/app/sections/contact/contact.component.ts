import { Component } from '@angular/core';
import { supabase } from '../../../integration/client';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  async onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    this.isSubmitting = true;

    try {
      const { error } = await supabase
        .from('skillnest')
        .insert([
          { name: this.name, email: this.email, message: this.message },
        ]);

      if (error) {
        if (error.code === '23505') {
          this.errorMessage = 'This email is already used.';
        } else {
          this.errorMessage = 'Something went wrong. Please try again.';
        }
      } else {
        this.successMessage = 'Your message has been sent successfully!';
        this.name = '';
        this.email = '';
        this.message = '';
      }
    } catch (e) {
      this.errorMessage = 'Submission failed. Please check your network.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
