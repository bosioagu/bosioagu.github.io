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
    let message = '<div class="contenedor-totem"><img class="img-totem" src="./assets/image/totem-body.png"><div class="contenedor-ticket"><div class="img-ticket d-flex flex-column align-items-center justify-content-between"><div class="mt-2 w-100 d-flex flex-column align-items-center"><div class="mt-1 linea-separadora"></div><div class="mt-1 linea-separadora"></div></div><img class="mt-1 ticket-logo" src="./assets/image/logo-2-azul.png"><span class="ticket-numero mt-2"> {{numeroDelTurno}} </span><div class="mb-2 w-100 d-flex flex-column align-items-center"><div class="linea-separadora"></div><span class="ticket-texto-footer"></span> Gracias </span><div class="linea-separadora"></div></div></div></div></div>'
    window.parent.postMessage(message, '*')
    console.log("mensaje", message)
  }
}
