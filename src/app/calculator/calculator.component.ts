import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  household = {
    people: "",
    electricity: '',
    electricityOptions: [
      { label: "Low (≤ 70 kWh/month)", value: "70" },
      { label: "Medium (~110 kWh/month)", value: "110" },
      { label: "High (≥ 150 kWh/month)", value: "150" }
    ],
    gas: '',
    peopleArray: [1, 2, 3, 4,5,6],
  };
  transport = {
    km: 0,
    method: '',
    flights: 0,
    flightTime: 0
  };
  food = {
    meatDays: "",
    meatDaysArray: [0,1,2,3,4,5,6,7],
  };
  waste = {
    recycling: false
  };
  tipsVisible: string = '';

  calculateFootprint() {
    // Lógica para calcular a pegada de carbono
    console.log(this.household.electricity);
  }

  showTips(section: string) {
    this.tipsVisible = section;
  }

  closeTips() {
    this.tipsVisible = '';
  }
}
