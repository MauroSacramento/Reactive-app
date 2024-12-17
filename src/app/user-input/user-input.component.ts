import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-inut.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @ViewChild('form') private form?: ElementRef<HTMLFormElement>

  @Output() calculate = new EventEmitter<InvestmentInput>()
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpetationReturn = '5';
  enteredDuration = '10';

  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpetationReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    })
    this.form?.nativeElement.reset();
  }
}
