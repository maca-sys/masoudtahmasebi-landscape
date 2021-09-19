import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { fadeIn, fadeOut, flipIn, flipOut, jackIn, jackOut, scaleIn, scaleOut } from '../../animations/carousel.animation';
import { SlideModel } from '../../models/slide.model';

@Component({
  selector: 'mt-slideshow',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "1500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "1500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "1750ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "1750ms" } })
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
export class MtSlideshowComponent implements OnInit {
  @Input() slides: SlideModel[] = [];
  @Input() animationType = 'scale';
  currentSlide = 0;
  @HostBinding("style.--some-var")
  private value: string = "Tah";

  constructor(private sanitizer: DomSanitizer) { }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    // console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    // console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit() {
    this.preloadImages();
    if (location.hash !== "") {
      const locationHash = this.slides.find(s => s.selectable?.link == location.hash) ? this.slides.find(s => s.selectable?.link == location.hash) : new SlideModel();
      if (locationHash) {
        this.currentSlide = this.slides.indexOf(locationHash);
      }
    }
  }

  onSlideClick(slide: SlideModel) {
    // const next = this.currentSlide + 1;
    this.currentSlide = this.slides.indexOf(slide);
  }

  // @HostBinding("attr.style")
  // public get valueAsStyle(): any {
  //   return this.sanitizer.bypassSecurityTrustStyle(`--some-var: ${this.slides[this.currentSlide].alt}`);
  // }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }


}
