
import { Component } from '@angular/core';
import { SlideModel } from './shared/models/slide.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'masoud-tahmasebi-spa';
  slides: SlideModel[] = [
    {
      src: '../assets/img/1-1.jpg',
      srcLarge: '../assets/img/1-.jpg',
      srcMedium: '../assets/img/1-1.jpg',
      x: '20vw',
      y: '20vh',
      alt: 'ma',
      selectable: {
        id: 1, title: "Masoud", titleFull: " Tahmasebi", linkTitle: "Home", link: "#", caption: `A Senior Software Engineer or <em><b>web developer&nbsp</em></b> who is devoted to his work and thinks nothing is impossible. Innovation and creativity is his motto and as a programmer, he tries his best in every aspect of his work .
    If you want the best, you must hire the best.` }
    },
    {
      src: '../assets/img/2-2.jpg',
      srcLarge: '../assets/img/2-.jpg',
      srcMedium: '../assets/img/2-2.jpg',
      x: '21vw',
      y: '5vh',
      alt: 'ma',
      selectable: {
        id: 2, titleFull: " Me", title: "About", linkTitle: "About", link: "#about", caption: `
      <div style="line-height:2rem;">
  Full-Stack Software Developer with main focus on Javascript (Angular) and .Net Core on various projects, with Continuous Integration and Continuous Delivery via GitLab for great companies in Germany.  Agile Team, Morning standup,And:<br>JavaScript (Angular-React-Vue)<br>AWS Services: S3, Transcribe, Search Indexing<br>.Net Core and .Net<br>GItLab, Docker DevOps<br>Databases: PostgreSQL, Oracle, MySQL and MS SQL, MongoDB.</div>` }
    }, {
      src: '../assets/img/masoudta.png',
      x: '48vw',
      y: '0',
      alt: 'ma',
      selectable: {
        id: 1, title: "Contact", titleFull: " Me", linkTitle: "Contact", link: "#contact", caption: `
        <p>Feel Free to Contact Innovation</p>
        <iframe
          id="JotFormIFrame-212615326323346"
          title="Custom Simple Order Form"
          onload="window.parent.scrollTo(0,0)"
          allowtransparency="true"
          allowfullscreen="true"
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/212615326323346"
          frameborder="0"
          style="
          min-width: 100%;
          height:539px;
          border:none;"
          scrolling="no"
        >
        </iframe>
        <script type="text/javascript">
          var ifr = document.getElementById("JotFormIFrame-212615326323346");
          if (ifr) {
            var src = ifr.src;
            var iframeParams = [];
            if (window.location.href && window.location.href.indexOf("?") > -1) {
              iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
            }
            if (src && src.indexOf("?") > -1) {
              iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
              src = src.substr(0, src.indexOf("?"))
            }
            iframeParams.push("isIframeEmbed=1");
            ifr.src = src + "?" + iframeParams.join('&');
          }
          window.handleIFrameMessage = function(e) {
            if (typeof e.data === 'object') { return; }
            var args = e.data.split(":");
            if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
            if (!iframe) { return; }
            switch (args[0]) {
              case "scrollIntoView":
                iframe.scrollIntoView();
                break;
              case "setHeight":
                iframe.style.height = args[1] + "px";
                break;
              case "collapseErrorPage":
                if (iframe.clientHeight > window.innerHeight) {
                  iframe.style.height = window.innerHeight + "px";
                }
                break;
              case "reloadPage":
                window.location.reload();
                break;
              case "loadScript":
                if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
                var src = args[1];
                if (args.length > 3) {
                    src = args[1] + ':' + args[2];
                }
                var script = document.createElement('script');
                script.src = src;
                script.type = 'text/javascript';
                document.body.appendChild(script);
                break;
              case "exitFullscreen":
                if      (window.document.exitFullscreen)        window.document.exitFullscreen();
                else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
                else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
                else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
                else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
                break;
            }
            var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
            if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
              var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
              iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
            }
          };
          window.isPermitted = function(originUrl, whitelisted_domains) {
            var url = document.createElement('a');
            url.href = originUrl;
            var hostname = url.hostname;
            var result = false;
            if( typeof hostname !== 'undefined' ) {
              whitelisted_domains.forEach(function(element) {
                  if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
                      result = true;
                  }
              });
              return result;
            }
          }
          if (window.addEventListener) {
            window.addEventListener("message", handleIFrameMessage, false);
          } else if (window.attachEvent) {
            window.attachEvent("onmessage", handleIFrameMessage);
          }
          </script>`
      },
      contactSlide: 'https://form.123formbuilder.com/my-contact-form-5997902.html'
    },
    // { src: '../assets/img/6.JPG', alt: 'ma', selectable: { id: 3, title: "Projects", link: "#projects" } },
    // { src: '../assets/img/1.JPG', alt: 'ma', selectable: { id: 4, title: "Contact Me", link: "#contact" } },
  ]
}
