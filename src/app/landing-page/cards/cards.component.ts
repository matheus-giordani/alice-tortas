import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  phoneNumber = '558192524545'; // número de telefone do destinatário, incluindo o código do país
  baseUrl = 'https://api.whatsapp.com/send';
  public linkTortaAlice: any;
  public linkTortaChapeleiro: any;
  public linkTortaCoelho: any;

  constructor() {}

  ngOnInit(): void {
    const date = new Date();
    const currentHour = date.getHours();
    let horario: string;
    if (currentHour >= 5 && currentHour < 12) {
      horario = 'Bom dia!';
    } else if (currentHour >= 12 && currentHour < 18) {
      horario = 'Boa tarde!';
    } else {
      horario = 'Boa noite!';
    }

    this.linkTortaAlice = this.constructorRoute(
      `${horario} Gostaria de pedir uma Torta da Alice`
    );
    this.linkTortaChapeleiro = this.constructorRoute(
      `${horario} Gostaria de pedir uma Torta do Chapeleiro`
    );
    this.linkTortaCoelho = this.constructorRoute(
      `${horario} Gostaria de pedir uma Torta do Coelho Branco`
    );
  }

  constructorRoute(message: any) {
    const queryString = `phone=${encodeURIComponent(
      this.phoneNumber
    )}&text=${encodeURIComponent(message)}`;
    return `${this.baseUrl}?${queryString}`;
  }
}
