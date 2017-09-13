import { Component } from '@angular/core';

declare var jquery : any;
declare var $      : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angul4r';

  constructor() {  }

  ngOnInit() { console.log(this.title + 'Starts...'); }

  blur_ON(){
    $("h1").addClass("blr");
    $("h2").addClass("blr");
    $("hr").addClass("blr");
    $("p").addClass("blr");
    $("img").addClass("shdw");
  }
  blur_OFF(){
    $("h1").removeClass("blr");
    $("h2").removeClass("blr");
    $("hr").removeClass("blr");
    $("p").removeClass("blr");
    $("img").removeClass("shdw");
  }
}
