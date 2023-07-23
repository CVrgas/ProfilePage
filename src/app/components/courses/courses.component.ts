import { Component, Input } from '@angular/core';
import { platform } from 'src/app/models/platform';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  @Input() platforms: platform[] = [];
}
