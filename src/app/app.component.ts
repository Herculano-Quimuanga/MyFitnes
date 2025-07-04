import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./main/header/header.component";
import { BannerComponent } from "./content/banner/banner.component";
import { AboutComponent } from "./content/about/about.component";
import { ProgramsComponent } from "./content/programs/programs.component";
import { ServicesComponent } from "./content/services/services.component";
import { FooterComponent } from "./main/footer/footer.component";
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ProgramsComponent,
    ServicesComponent,
    FooterComponent
  ],
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

  activeSection: string = '';


  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['hero', 'about', 'destack', 'news', 'gallery', 'parceiros'];
    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = id;
          break;
        }
      }
    }
  }

}
