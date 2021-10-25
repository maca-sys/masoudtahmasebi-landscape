
import { Component } from '@angular/core';
import { PortfolioModel } from './shared/models/slide.model';
import contactForm from './contact-form'
import { HeaderModel } from "./shared/models/header.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Masoud Tahmasebi, A Full Stack Software Developer';
  header: HeaderModel[] = [{
    href: "https://github.com/masoudtahmasebi93/",
    enabled: true,
    icon: `<svg width="24" height="24" viewBox="0 0 1024 1024" fill="#ff9933" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      transform="scale(64)" fill="#ff9933" />
  </svg>`,
    title: 'Nasoud on Github'
  }, {
    href: "https://www.linkedin.com/in/masoudtahmasebi/",
    enabled: true,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 34" fill="#ff9933">
    <title>
      LinkedIn
    </title>
    <g>
      <path
        d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
        fill="#ff9933"></path>
    </g>
  </svg>`,
    title: 'Masoud on Linkedin'
  }, {
    href: "https://stackoverflow.com/users/9163685/masoud-tahmasebi",
    enabled: true,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff9933">
    <path
      d="M0 0v24h24v-24h-24zm10.488 8.272l5.531 3.243-.686 1.162-5.532-3.243.687-1.162zm-1.456 3.113l6.185 1.739-.331 1.23-6.204-1.667.35-1.302zm-.672 2.813l6.498.65-.118 1.28-6.504-.586.124-1.344zm-.193 2.469h6.667v1.333h-6.667v-1.333zm8.833 3.333h-11v-7h1v6h9v-6h1v7zm-.852-8.704l-3.56-5.219 1.115-.76 3.559 5.219-1.114.76zm1.356-.841l-1.08-6.224 1.328-.231 1.081 6.224-1.329.231z" />
  </svg>`,
    title: 'Masoud on StackoverFlow'
  },
  ];
  portfolio: PortfolioModel[] = [
    {
      src: '../assets/img/1-1.jpg',
      srcLarge: '../assets/img/1-.jpg',
      srcMedium: '../assets/img/1-1.jpg',
      x: '28vw',
      y: '17vh',
      alt: 'masoud tahmasebi',
      selectable: {
        id: 1, title: "Masoud", titleFull: " Tahmasebi", linkTitle: "Home", link: "#", caption: `A Senior Software Engineer or <em><b>web developer&nbsp</em></b> who is devoted to his work and thinks nothing is impossible. Innovation and creativity is his motto and as a programmer, he tries his best in every aspect of his work .
    If you want the best, you must hire the best.` }
    },
    {
      src: '../assets/img/4.jpg',
      // srcLarge: '../assets/img/2-.jpg',
      // srcMedium: '../assets/img/2-2.jpg',
      x: '21vw',
      y: '5vh',
      alt: 'masoud tahmasebi',
      selectable: {
        id: 2, titleFull: " Me", title: "About", linkTitle: "About", link: "#about", caption: `
      <div style="line-height:2rem;">
  Full-Stack Software Developer with main focus on Javascript and .Net Core on various projects, with Continuous Integration and Continuous Delivery via GitLab for great companies in Germany.  Agile Team, Morning standup,And:<br>JavaScript (Angular-React-Vue)<br>AWS Services: S3, Transcribe, Search Indexing<br>.Net Core and .Net<br>GItLab, Docker DevOps<br>Databases: PostgreSQL, Oracle, MySQL and MS SQL, MongoDB.</div>` }
    }, {
      src: '../assets/img/3.jpg',
      x: '40vw',
      y: '4vh',
      alt: 'masoud tahmasebi',
      selectable: {
        id: 2, titleFull: " Packages", title: "Published", linkTitle: "Packages", link: "#packages", caption: `
      <div style="line-height:2rem;">
      3 packages
      <br>
      <a  target="_blank" rel="noopener" href="https://www.npmjs.com/package/mt-portfolio"><b>mt-portfolio</b></a>
<br>
published 0.0.5 - A Portfolio maker for Angular with image, heading, caption, ability to add contact form and demo, Like this website :))

<br>
<a  target="_blank" rel="noopener" href="https://www.npmjs.com/package/mt-slideshow"><b>mt-slideshow</b></a>
<br>
published 0.0.2 - A simple Slide Show for Angular with alt for SEO

<br>
<a  target="_blank" rel="noopener" href="https://www.npmjs.com/package/mt-a-carousel"><b>mt-a-carousel</b></a>
<br>
published 0.0.2 - A simple Carousel for Angular with alt for SEO and caption with link

<br>
<br>
And soon more ...
      </div>` }
    }, {
      src: '../assets/img/masoudta.png',
      x: '48vw',
      y: '0',
      alt: 'masoud tahmasebi',
      selectable: {
        id: 1, title: "Contact", titleFull: " Me", linkTitle: "Contact", link: "#contact", caption: contactForm
      }
    },
    // { src: '../assets/img/6.JPG', alt: 'masoud tahmasebi', selectable: { id: 3, title: "Projects", link: "#projects" } },
    // { src: '../assets/img/1.JPG', alt: 'masoud tahmasebi', selectable: { id: 4, title: "Contact Me", link: "#contact" } },
  ]
}
