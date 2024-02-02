import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exerciceseadd',
  templateUrl: './exerciceseadd.component.html',
  styleUrls: ['./exerciceseadd.component.css']
})
export class ExerciceseaddComponent {
  @ViewChild('exerciseForm') exerciseForm!: NgForm; // Using the non-null assertion operator

  newExercise = {
    username: '',
    description: '',
    duration: 0,
    date: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  addExercise() {
    // Check if the form is valid before submitting
    if (this.exerciseForm.valid) {
      // Make a POST request to your backend API to add the exercise
      this.http.post<any>('http://localhost:8000/api/exercises/add', this.newExercise).subscribe(
        (res) => {
          console.log('Exercise added successfully:', res);
          // Redirect to the exercise list after successful addition
          this.router.navigate(['/exercice']);
        },
        (err) => {
          console.error('Error adding exercise:', err);
        }
      );
    }
  }
  
}
