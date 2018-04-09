import { Injectable } from '@angular/core';

@Injectable()
export class LazyImageLoaderService {

  private observedElements:Array<Element>;
  private lazyImageObserver: IntersectionObserver;
  private processing = false;

  constructor() {
    this.observedElements =new Array<Element>();
    this.lazyImageObserver = new IntersectionObserver(entries => {
      this.processObservations(entries);
    });
  }

  public ProcessChanges():void {
    if (!this.processing) {
      this.processing=true;
      this.observeElements();
      this.processing=false;
    }
  }

  private processObservations(entries){
    entries.forEach(entry => {
      var src = entry.target.getAttribute("src");
      if (entry.intersectionRatio > 0 && (src === null || src === "")) {
        this.lazyImageObserver.unobserve(entry.target);
        var url= entry.target.getAttribute("data-url");
        if (url){
          entry.target.setAttribute("src",url);
        }
      }
    });
  }

  private observeElements():boolean {

    this.clearObservations();

    var elements = document.getElementsByClassName("js-lazy-image");
    if (elements.length==0){
      return;
    }

    for(var i=0;i<elements.length;i++){
      this.observeElement(elements[i]);
    }
    return true;
  }

  private observeElement(element):void{
    this.observedElements.push(element);
    this.lazyImageObserver.observe(element);
  }

  private clearObservations():void{
    this.observedElements.forEach(element => {
      this.lazyImageObserver.unobserve(element);
    });
    this.observedElements =new Array<Element>();
  }
}
