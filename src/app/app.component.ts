import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'D38';

  // CONSTRUCTOR
  constructor(private router:Router) {}

  // ON INITIALIZING
  ngOnInit(): void{

  }

  // ON CLICK (Home icon)
  goHome() {
    this.router.navigate(['/'])
  }

  // ON CLICK (Add icon)
  goAddCity() {
    this.router.navigate(['/add-city'])
  }
}
