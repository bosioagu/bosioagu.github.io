import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ticketData : string = '<div class=\"content-wrapper\" style=\"margin-left: 25px; width: 170px;\"> \n <table border=\"0\"> \n <tbody>    \n <tr> \n <td colspan=\"4\" align=\"center\">   <p style=\"font-size: 15px; color: #000000; margin-top: 15px; width: 5.5cm\">LUZ DEL SUR</p>  </td> \n </tr> \n <tr> \n <td width=\"50%\" class=\"text-left\" style=\"font-size: 10px; color: #000000;\"><span id=\"tkt_fecha\">28/12/2022</span></td> \n <td width=\"50%\" class=\"text-right\" style=\"font-size: 10px; color: #000000;\"><span id=\"tkt_hora\">12:17:22</span></td> \n </tr> \n <tr> \n <td colspan=\"4\"> \n<hr size=\"1\" style=\"border-color: #707070; margin-top: 10px;\"></td> \n </tr> \n <tr> \n <td colspan=\"4\" align=\"center\"> <p style=\"font-size: 12px; color: #000000; margin-top: 20px;\">Su número de atención es:</p> <h2 id=\"tkt_numero\" class=\"numero\" style=\"font-size: 48px; color: #000000; margin-top:      20px;\">K 6</h2> </td> \n </tr> \n <tr> \n <td colspan=\"4\"> \n <hr size=\"1\" style=\"border-color: #707070; margin-top: 12px;\"> </td> \n </tr> \n <tr> \n <td colspan=\"4\" align=\"center\"> <p id=\"tkt_centro_atencion\" style=\"font-size: 12px; color: #000000; margin-top: 4px;\"> Laboratorio</p> </td> \n </tr> \n </tbody>\n </table> \n </div>'

  constructor(){
  }
  
  sendTicketData() {
    window.parent.postMessage(this.ticketData, '*')
    console.log("mensaje", this.ticketData)
  }
}
