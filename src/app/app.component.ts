import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./main/header/header.component";
import { BannerComponent } from "./content/banner/banner.component";
import { AboutComponent } from "./content/about/about.component";
import { ProgramsComponent } from "./content/programs/programs.component";
import { ServicesComponent } from "./content/services/services.component";
import { ReviewComponent } from "./content/review/review.component";
import { FooterComponent } from "./main/footer/footer.component";
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
