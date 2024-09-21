import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from "../projects.component";

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrls: ['../projects.component.scss']  // Fixed to styleUrls
})
export class ProjectItemComponent {
  @Input({ required: true }) project!: Project;

  @Output() projectClick = new EventEmitter<void>();  // Emit a click event
}
