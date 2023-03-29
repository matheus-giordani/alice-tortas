import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-do-your-self',
  templateUrl: './do-your-self.component.html',
  styleUrls: ['./do-your-self.component.css'],
  providers: [DatePipe]
})
export class DoYourSelfComponent implements OnInit {
  phoneNumber = '558192524545'; // número de telefone do destinatário, incluindo o código do país
  message: string | undefined; // mensagem que será enviada
  baseUrl = 'https://api.whatsapp.com/send';
  link: any
  constructor(private formBuilder: FormBuilder,private router: Router, private datePipe: DatePipe ) {}

  public form : FormGroup = this.formBuilder.group({
    massa: [null, Validators.required],
    recheio: [null, Validators.required],
    quantidade: [null, Validators.required],
    comentario: [null]
  })

  ngOnInit(): void {


  }

  submit(){
    console.log("teste")
    console.log(this.form.value)
    this.message =

    `
    \t \ud83e\uddc1*INFORMAÇÕES DO PEDIDO*\ud83e\uddc1

    \ud83c\udf6a *Massa:* ${(this.form.value).massa}
    \ud83c\udf6a *Recheio:* ${(this.form.value).recheio}
    \ud83c\udf6a *Quantidade:* ${(this.form.value).quantidade}
    \ud83c\udf6a *Data do pedido:* ${this.getDate() }
    \ud83c\udf6a *Comentario:* ${((this.form.value).comentario) || ''}

    `
    this.link = this.constructorRoute(this.message)
    window.location.href = this.link


  }

  getDate(){
    const currentDate = new Date()
    const dateFormated = this.datePipe.transform(currentDate, 'dd/MM/yyyy HH:mm:ss')
    return dateFormated

  }



  constructorRoute(message: any){
    const queryString = `phone=${encodeURIComponent(
      this.phoneNumber
    )}&text=${encodeURIComponent(message)}`;
    return `${this.baseUrl}?${queryString}`;


  }
}
