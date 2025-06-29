import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: 'top-menu.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TopMenuComponent implements OnInit {
  isMobileMenuOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  onLinkClick = () => {
    setTimeout(() => {
      this.isMobileMenuOpen = false;
    });
  };

  onToggleMobileMenu = () => {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  };
}
