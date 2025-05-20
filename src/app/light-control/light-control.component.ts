import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-light-control',
  templateUrl: './light-control.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./light-control.component.css']
})
export class LightControlComponent {
  isOn: boolean = false;
  switchLabel: string = 'Main Switch';

  toggleLight() {
    this.isOn = !this.isOn;
  }
}
