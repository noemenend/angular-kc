import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  logo: string;
  constructor() { }

  ngOnInit() {
    this.title = 'angular-kc';
    this.logo = '../../../assets/logo.svg';
  }

}
