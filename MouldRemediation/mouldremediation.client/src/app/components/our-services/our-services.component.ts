import { Component, OnInit } from '@angular/core';
import { ImageCompareComponent } from '../image-compare/image-compare.component';
import { OurServicesItemComponent } from '../our-services-item/our-services-item.component';

@Component({
  selector: 'app-our-services',
  templateUrl: 'our-services.component.html',
  standalone: true,
  imports: [ImageCompareComponent, OurServicesItemComponent],
})
export class OurServicesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
