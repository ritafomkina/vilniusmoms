import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent {
  public sections = ['Беременность', 'Малыш родился', 'Тоддлер', 'Полезные ссылки'];
}
