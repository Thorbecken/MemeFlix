import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.css']
})
export class SubscriptionPageComponent implements OnInit {
  public submittedName = "";
  public nameIsSubmitted = false;
  public welcomeText = "";

  submitName(value) {
    this.submittedName = value;
    this.welcomeText = "Thank you " + this.submittedName + " for submitting your name";
    this.nameIsSubmitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
