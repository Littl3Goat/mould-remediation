import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services-item.',
  templateUrl: 'our-services-item.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class OurServicesItemComponent implements OnInit {
  @Input() title: string;

  @Input() img: string;

  constructor() {}

  ngOnInit() {}
}
