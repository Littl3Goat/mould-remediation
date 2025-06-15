import { Component, OnInit } from '@angular/core';
import { FaqItemComponent } from '../faq-item/faq-item.component';

@Component({
  selector: 'app-faq-section',
  templateUrl: 'faq-section.component.html',
  standalone: true,
  imports: [FaqItemComponent],
})
export class FaqSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
