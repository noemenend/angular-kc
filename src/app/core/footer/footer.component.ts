import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  empresa: string;
  lugar: string;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.autor = 'Noelia Muñiz Menendez';
    this.empresa = 'KeepCoding';
    this.lugar = 'Madrid';
    this.fecha = new Date();
  }

}
