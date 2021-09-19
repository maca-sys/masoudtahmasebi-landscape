import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { fadeIn, fadeOut, flipIn, flipOut, jackIn, jackOut, scaleIn, scaleOut } from '../../animations/carousel.animation';
import { PortfolioModel } from '../../models/slide.model';
import { HeaderModel } from "../../models/header.model";

@Component({
  selector: 'mt-portfolio',
  templateUrl: './portfolio-maker.component.html',
  styleUrls: ['./portfolio-maker.component.scss'],
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
export class MtPortfolioMakerComponent implements OnInit {
  @Input() slides: PortfolioModel[] = [];
  @Input() animationType = 'scale';
  @Input() header: HeaderModel[] = [];
  currentSlide = 0;

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
      const locationHash = this.slides.find(s => s.selectable?.link == location.hash) ? this.slides.find(s => s.selectable?.link == location.hash) : new PortfolioModel();
      if (locationHash) {
        this.currentSlide = this.slides.indexOf(locationHash);
      }
    }
  }

  onSlideClick(slide: PortfolioModel) {
    // const next = this.currentSlide + 1;
    this.currentSlide = this.slides.indexOf(slide);
  }


  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }


}
