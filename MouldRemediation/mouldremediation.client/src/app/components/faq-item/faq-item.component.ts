import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: 'faq-item.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FaqItemComponent implements OnInit {
  @Input() title: string;

  isOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  onTitleClicked = () => {
    this.isOpen = !this.isOpen;

    console.log(this.isOpen);
  };
}
