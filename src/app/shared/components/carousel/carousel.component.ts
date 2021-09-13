import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import {
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut
} from '../../animations/carousel.animation';
import CarouselModel from '../../models/carousel.model';
import SlideModel from '../../models/slide.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() carouselItems: CarouselModel[] = [];
  @Input() animationType = 'Scale';
  currentSlide = 0;
  previousSlide = 0;
  nextSlide = 0;

  constructor() {
  }

  onNextClick() {
    this.previousSlide = this.currentSlide;
    const current = this.currentSlide + 1;
    this.currentSlide = current === this.carouselItems.length ? 0 : current;
    const next = this.currentSlide + 1;
    this.nextSlide = next > this.carouselItems.length - 1 ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
    console.log("next clicked, new nextSlide slide is: ", this.nextSlide);
    console.log("next clicked, new previousSlide slide is: ", this.previousSlide);
  }
  onPreviousClick() {
    // this.nextSlide = this.currentSlide;
    // const previous = this.currentSlide - 1;
    // this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    // const next = this.previousSlide + 1;
    // this.previousSlide = next === this.slides.length ? 0 : next;
    this.nextSlide = this.currentSlide;
    const current = this.currentSlide - 1;
    this.currentSlide = current < 0 ? this.carouselItems.length - 1 : current;
    const prev = this.currentSlide - 1;
    this.previousSlide = prev < 0 ? this.carouselItems.length - 1 : prev;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
    console.log("previous clicked, new nextSlide slide is: ", this.nextSlide);
    console.log("previous clicked, new previousSlide slide is: ", this.previousSlide);
  }


  ngOnInit() {
    this.preloadImages(); // for the demo
    // this.animationTypeSelected = AnimationType[this.animationType];
    
    this.onNextClick();
  }

  preloadImages() {
    for (const slide of this.carouselItems) {
      new Image().src = slide.src;
    }
  }

}
