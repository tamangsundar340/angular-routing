import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToFirst(){
    console.log("Trying to go to next page...");

    setTimeout(() => {
      console.log("To first compoent");
      this.router.navigate(['first'])
    },2000)
  }

}
