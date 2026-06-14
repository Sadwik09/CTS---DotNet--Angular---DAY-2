import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Course, CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, RouterLink],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: Course[] = [
    { id: 101, name: 'Angular Fundamentals', code: 'ANG-101', credits: 4 },
    { id: 102, name: 'TypeScript Essentials', code: 'TS-102', credits: 3 },
    { id: 103, name: 'API Integration', code: 'API-103', credits: 3 },
    { id: 104, name: 'Reactive Forms', code: 'NGF-104', credits: 4 },
    { id: 105, name: 'Component Communication', code: 'CMP-105', credits: 2 }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
