import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare var $: any; // Ensure jQuery is properly imported.

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChild('theCarousel') carousel: ElementRef | undefined;

  constructor() {
    // Constructor logic here
  }

  ngAfterViewInit() {
    if (this.carousel) {
      this.setupCarousel();
    }
  }

  setupCarousel() {
    const carousel = $(this.carousel?.nativeElement);

    carousel.carousel({
      interval: false
    });

    $('.multi-item-carousel .item').each(() => {
      const currentSlide = $(this);
      let next = currentSlide.next();

      if (!next.length) {
        next = currentSlide.siblings(':first');
      }

      next.children(':first-child').clone().appendTo(currentSlide);

      if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo(currentSlide).addClass('rightest');
      } else {
        currentSlide.siblings(':first').children(':first-child').clone().appendTo(currentSlide).addClass('rightest');
      }
    });

    $(document).ready(() => {
      carousel.swiperight(() => {
        carousel.carousel('prev');
      });

      carousel.swipeleft(() => {
        carousel.carousel('next');
      });

      $.mobile.loading().hide();
    });
  }
}
