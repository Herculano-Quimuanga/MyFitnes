import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  ShowMenu: boolean = false;
  ngOnInit(){
  }

  ToggleMenu(){
    this.ShowMenu = !this.ShowMenu;
    console.log('Change Menu');
  }
}
