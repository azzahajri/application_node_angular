import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {
  exercises: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getExercisesList();
  }

  getExercisesList(): void {
    this.http.get<any[]>('http://localhost:8000/api/exercises').subscribe(
      (res) => {
        console.log(res);
        this.exercises = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteExercise(exerciseId: string): void {
    if (confirm('Are you sure you want to delete this exercise?')) {
      this.http.delete(`http://localhost:8000/api/exercises/${exerciseId}`).subscribe(
        (res) => {
          console.log('Exercise deleted successfully:', res);
          // Refresh the exercise list after successful deletion
          this.getExercisesList();
        },
        (err) => {
          console.error('Error deleting exercise:', err);
        }
      );
    }
    
  }


}
