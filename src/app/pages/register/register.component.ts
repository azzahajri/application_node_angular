// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  register(): void {
    if (this.registerForm.valid) {
      const { username, email, password, isAdmin } = this.registerForm.value;
      this.authService.register({ username, email, password, isAdmin }).subscribe(
        () => {
          console.log('User registered successfully.');
          // Optionally, navigate to another page or show a success message.
          this.router.navigate(['/login']);

        },
        (error) => {
         // console.error('Error registering user:', error);
          // Handle error, e.g., display an error message to the user.
        }
      );
    }
  }


}
