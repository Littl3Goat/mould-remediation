import { Component, OnInit } from '@angular/core';
import { ImageCompareComponent } from '../image-compare/image-compare.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: 'why-choose-us.component.html',
  standalone: true,
  imports: [ImageCompareComponent, SlickCarouselModule],
})
export class WhyChooseUsComponent implements OnInit {
  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    dots: true,
    prevArrow: `<button type="button" class="slick-prev">
                  <i class="fa-solid fa-circle-chevron-left"></i>
               </button>`,
    nextArrow: `<button type="button" class="slick-next">
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </button>`,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: false,
        },
      },
    ],
  };

  ngOnInit() {}
}
