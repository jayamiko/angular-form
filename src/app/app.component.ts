import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  template: `
          <div class="form-container">
            <form (ngSubmit)="onSubmit()" #nameForm="ngForm">
              <div class="form-group">
                <label for="firstname">First Name:</label>
                <input type="text" id="firstname" [(ngModel)]="firstname" name="firstname" required>
              </div>
              <div class="form-group">
                <label for="lastname">Last Name:</label>
                <input type="text" id="lastname" [(ngModel)]="lastname" name="lastname" required>
              </div>
              <button type="submit" [disabled]="!nameForm.form.valid">Submit</button>
            </form>
            <div *ngIf="fullname">
              <p>{{ fullname }}</p>
            </div>
          </div>
        `,
  styles: [
    `
          .form-container {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .form-group {
            margin-bottom: 15px;
          }
          label {
            display: block;
            margin-bottom: 5px;
          }
          input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
          }
          button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button[disabled] {
            background-color: #ccc;
          }
        `,
  ],
})
export class AppComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  fullname: string | null = null;

  ngOnInit(): void {}

  onSubmit(): void {
    this.fullname = `${this.firstname}_${this.lastname}`;
  }

  changeLanguage(language: string): void {}
}
