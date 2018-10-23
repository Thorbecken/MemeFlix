import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.css']
})
export class SubscriptionPageComponent implements OnInit {
  public submittedName = "";
  public nameIsSubmitted = "";
  public name = "!";

  submitName(value) {
    this.name = value;
    this.submittedName = "Thank you " + this.name + " for submitting your name";
    this.nameIsSubmitted = "data:image/jpeg;base64,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";
  }

  constructor() { }

  ngOnInit() {
  }

}
