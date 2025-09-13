import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,   // ✅ needed for standalone
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'] // ✅ should be plural "styleUrls"
})
export class Footer {}