import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceService, Experience } from '../../services/work-experience.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule],
  templateUrl: './work-experience.html',
  styleUrls: ['./work-experience.css'],
  standalone: true
})
export class WorkExperience {
// Observable to hold work experiences
  experiences$: Observable<Experience[]>; 

  constructor(private workExpService: WorkExperienceService) {
    // Assign the Observable from the service
    this.experiences$ = this.workExpService.getExperiences();
  }
}
