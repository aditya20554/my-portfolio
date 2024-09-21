import { Component } from '@angular/core';
import { NgClass, NgForOf } from "@angular/common";
import { ProjectItemComponent } from "./project-item/project-item.component";
declare var bootstrap: any;
export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']  // Fixed to styleUrls
})
export class ProjectsComponent {
  protected projects: Project[] = [
    {
      name: 'Two View Depth Estimation',
      description: 'A Computer Vision model to estimate the depth of the objects in the images using epipolar geometry.',
      technologies: ['Python', 'Pytorch', 'OpenCV', 'Computer Vision', 'Google Colab'],
      src: './assets/projects/two-view-depth.jpg',
      link: 'https://github.com/aditya20554',
    },
    {
      name: 'Will Hero Game',
      description: 'An arcade game built using JavaFX in which the hero has to clear all the obstacles present such enemies, rocks etc to save the queen.',
      technologies: ['Java', 'JavaFX', 'SceneBuilder'],
      src: './assets/projects/will-hero.png',
      link: 'https://github.com/aditya20554',
    },
    {
      name: 'Online Retail Store',
      description: 'An online retail store built using Python and MySQL with a variety of features for different stakeholders.',
      technologies: ['Python', 'MySQL', 'HTML', 'CSS'],
      src: './assets/projects/online-retail-store.jpg',
      link: 'https://github.com/aditya20554',
    },
    {
      name: 'Historical Weather App',
      description: 'A mobile app that shows current and historical weather data based on the user’s location.',
      technologies: ['Kotlin', 'Android Studio'],
      src: './assets/projects/weather-app.jpg',
      link: 'https://github.com/SebastianoFazzino/enhanced-number-game',
    },
    {
      name: 'Machine Learning Project: Students Adaptability in Online Education',
      description: 'Analyzing the adaptability of students in online education using various ML models.',
      technologies: ['Python', 'Google Colab', 'Pandas', 'Numpy', 'Matplotlib', 'Sklearn'],
      src: './assets/projects/data-science.png',
      link: 'https://github.com/SebastianoFazzino/IBM-Data-Science-Professional-Certificate/tree/main/Applied%20Data%20Science%20Capstone',
    },

    {
      name: 'Deep Learning Project: Fake News Detection',
      description: 'Classify the news present in the dataset into real or fake using Bi-LSTM and CNN models. Have used extensive NLP techniques in data preprocessing.',
      technologies: ['Python', 'Google Colab', 'TensorFlow', 'Numpy',  'Sklearn'],
      src: './assets/projects/deep-learning.jfif',
      link: 'https://github.com/SebastianoFazzino/IBM-Data-Science-Professional-Certificate/tree/main/Applied%20Data%20Science%20Capstone',
    }
  ];

  selectedProject: Project | null = null;

  openModal(project: Project) {
    this.selectedProject = project;
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
  }
}
