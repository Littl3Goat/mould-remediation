import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-clients-item',
  templateUrl: 'our-clients-item.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class OurClientsItemComponent implements OnInit {
  @Input() name: string = 'Anonymous';
  @Input() stars: number;

  icon: string;
  starArray: number[] = [];

  constructor() {}

  ngOnInit() {
    if (this.stars < 1) this.stars = 1;

    if (this.stars > 5) this.stars = 5;

    for (let i = 0; i < this.stars; i++) {
      this.starArray.push(i);
    }

    const wordArray = this.name.split(' ');

    if (wordArray.length === 1) this.icon = wordArray[0][0];
    else this.icon = wordArray[0][0] + wordArray[wordArray.length - 1][0];
  }
}
