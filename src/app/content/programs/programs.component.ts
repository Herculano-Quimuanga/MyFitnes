import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programs',
  imports: [CommonModule],
  templateUrl: './programs.component.html',
})
export class ProgramsComponent {

  ProgramsCard = [
    {
      image: 'img/program-1.png',
      tittle: 'Strength Training',
      description: 'Build muscle, increase endurance, and enhance overall strength with our expert-led resistance and weight training sessions.',
      duraction: 300,
    },
    {
      image: 'img/program-2.png',
      tittle: 'Basic Yoga',
      description: 'Improve flexibility, balance, and mental well-being with guided yoga sessions designed for relaxation and inner peace.',
      duraction: 600,
    },
    {
      image: 'img/program-3.png',
      tittle: 'Body Building',
      description: 'Sculpt and define your physique with targeted workouts, expert coaching, and personalized training plans.',
      duraction: 900,
    },
    {
      image: 'img/program-4.png',
      tittle: 'Weight Loss',
      description: 'Burn calories, boost metabolism, and achieve your ideal weight with our effective fat-burning and cardio-based programs.',
      duraction: 1200,
    },
  ];
}
