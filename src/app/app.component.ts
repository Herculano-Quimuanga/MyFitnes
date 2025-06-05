import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./main/header/header.component";
import { BannerComponent } from "./content/banner/banner.component";
import { AboutComponent } from "./content/about/about.component";
import { ProgramsComponent } from "./content/programs/programs.component";
import { ServicesComponent } from "./content/services/services.component";
import { ReviewComponent } from "./content/review/review.component";
import { FooterComponent } from "./main/footer/footer.component";
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ProgramsComponent,
    ServicesComponent,
    ReviewComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'MyFitnes';

  ngOnInit(): void {
    AOS.init();
  }
}
