import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Education } from './components/education/education';
import { WorkExperience } from './components/work-experience/work-experience';
import { TechnicalSkills } from './components/technical-skills/technical-skills';
import { Projects } from './components/projects/projects';
import { Achievements } from './components/achievements/achievements';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'education', component: Education },
  { path: 'work-experience', component: WorkExperience },
  { path: 'technical-skills', component: TechnicalSkills },
  { path: 'projects', component: Projects },
  { path: 'achievements', component: Achievements },
  { path: 'contact', component: Contact },
];