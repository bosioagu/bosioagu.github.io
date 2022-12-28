import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bosioagu.github.io';
  html = '<h1>Aloha</h1>'

  constructor(){
    
  }
  
  print(){
    console.log("print");
    window.print()
    
  }

  saveLocalStorage(){
    localStorage.setItem("html", this.html)
    console.log(this.html)
  }

  message() {
		// parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
		//parent.postMessage("window:keydown.enter", "*")
    let message = "envió correcto"
    window.parent.postMessage(message, '*')
  }
}
