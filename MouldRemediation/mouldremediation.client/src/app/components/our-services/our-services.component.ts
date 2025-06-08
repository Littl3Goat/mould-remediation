import { Component, OnInit } from '@angular/core';
import { ImageCompareComponent } from '../image-compare/image-compare.component';

@Component({
  selector: 'app-our-services',
  templateUrl: 'our-services.component.html',
  standalone: true,
  imports: [ImageCompareComponent],
})
export class OurServicesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
