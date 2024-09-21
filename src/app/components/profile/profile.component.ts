import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("./assets/resume.pdf");
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/aditya-jain-003294245/', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/aditya20r5', '_blank');
  }
}
