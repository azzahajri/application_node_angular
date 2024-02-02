import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercicesedit',
  templateUrl: './exercicesedit.component.html',
  styleUrls: ['./exercicesedit.component.css']
})
export class ExerciceseditComponent implements OnInit {
  exerciseId: string = '';
  editedExercise: any = {};
  exercise: any = {};
  originalExercise: any = {}; // Declare originalExercise

  @ViewChild('exerciseForm') exerciseForm!: NgForm;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.exerciseId = params.get('id')!;
      this.getEditExercise();
    });
  }

  getEditExercise(): void {
    const exerciseId = this.route.snapshot.paramMap.get('id');
    if (exerciseId) {
      this.http.get<any>(`http://localhost:8000/api/exercises/${exerciseId}`).subscribe(
        (res) => {
          console.log('Exercise fetched successfully for editing:', res);
          this.exercise = res;

          // Store the original exercise details
          this.originalExercise = { ...this.exercise };
        },
        (err) => {
          console.error('Error fetching exercise for editing:', err);
        }
      );
    }
  }

  editExercise(): void {
    if (this.exerciseForm.valid) {
      // Assign values from form to editedExercise
      this.editedExercise = {
        username: this.exercise.username,
        description: this.exercise.description,
        duration: this.exercise.duration,
        date: this.exercise.date
      };

      // Send the updated data
      this.http.put(`http://localhost:8000/api/exercises/${this.exerciseId}`, this.editedExercise).subscribe(
        (res) => {
          console.log('Exercise updated successfully:', res);
          this.router.navigate(['/list/exercice']);
        },
        (err) => {
          console.error('Error updating exercise:', err);
        }
      );
    }
  }
}
