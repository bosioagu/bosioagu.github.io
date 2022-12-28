import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bosioagu.github.io';
  html = '<h1>Aloha</h1>'

  print(){
    console.log("print");
    window.print()
  }

  saveLocalStorage(){
    localStorage.setItem("html", this.html)
    console.log(this.html)
  }
}
