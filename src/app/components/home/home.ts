import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true
})
export class Home {
  isClicked = false;
  isHovered = false;

downloadResume() {
  this.isClicked = true; // trigger CSS effect
  window.open(`${window.location.origin}/resume.pdf`, '_blank');

  setTimeout(() => this.isClicked = false, 300); // reset after 300ms
}

}
