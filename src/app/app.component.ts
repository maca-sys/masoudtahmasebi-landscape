import { SlideModel } from './shared/components/slider/slider.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'masoud-tahmasebi-spa';
  slides: SlideModel[] = [
    { src: '../assets/img/1-.jpg', alt: 'ma', selectable: { id: 1, title: "Home", link: "#" } },
    { src: '../assets/img/2-.jpg', alt: 'ma', selectable: { id: 2, title: "About Me", link: "#about" } },
    // { src: '../assets/img/6.JPG', alt: 'ma', selectable: { id: 3, title: "Projects", link: "#projects" } },
    // { src: '../assets/img/1.JPG', alt: 'ma', selectable: { id: 4, title: "Contact Me", link: "#contact" } },
  ]
}
