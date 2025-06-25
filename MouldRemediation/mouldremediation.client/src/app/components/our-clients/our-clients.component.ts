import { Component, Input, OnInit } from '@angular/core';
import { OurClientsItemComponent } from '../our-clients-item/our-clients-item.component';

@Component({
  selector: 'app-our-clients',
  templateUrl: 'our-clients.component.html',
  standalone: true,
  imports: [OurClientsItemComponent],
})
export class OurClientsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
