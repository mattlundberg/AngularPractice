import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  payeeName: string;
  paymentDate: string;
  amount: number;
  
  onNameChange(event:Event){
    const target = event.target as HTMLInputElement;
    this.payeeName = target.value;
  }

  onDateChange(event:Event){
    const target = event.target as HTMLInputElement;
    this.paymentDate = target.value;
  }

  onAmountChange(event:Event){
    const target = event.target as HTMLInputElement;
    this.amount = parseFloat(target.value);
  }
}
