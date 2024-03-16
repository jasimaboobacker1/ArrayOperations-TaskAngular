import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-array';

  students: Student[] = [
    new Student("Mathew", 25, "Computer Science", 85),
    new Student("Akash", 21, "Electrical Engineering", 78),
    new Student("Amina", 19, "Mechanical Engineering", 92),
    new Student("Shesa", 22, "Chemistry", 105),
    new Student("Ava", 20, "Physics", 88),
    new Student("Michael", 21, "Mathematics", 81),
    new Student("Emma", 19, "Biology", 79),
    new Student("James", 22, "Civil Engineering", 84),
    new Student("Olivia", 20, "Environmental Science", 87),
    new Student("William", 21, "Astronomy", 90)
];



  selectedField: string = 'name';
  searchTerm: string = '';
  minMarks: number = 0;

  sortStudents() {
    this.students.sort((a, b) => {
      if (a[this.selectedField] < b[this.selectedField]) {
        return -1;
      }
      if (a[this.selectedField] > b[this.selectedField]) {
        return 1;
      }
      return 0;
    });
  }


  Search() {
    this.students = this.students.filter(student => {
      const searchString = this.searchTerm.toLowerCase();
      return student.name.toLowerCase().includes(searchString) ||
             student.department.toLowerCase().includes(searchString);
    });
  }

  filterStudentsByMarks() {

    
    const minMarksNumber = parseFloat(this.minMarks.toString());
    console.log(minMarksNumber);
    
    if (typeof minMarksNumber === 'number') 
  {
    if (isNaN(minMarksNumber) || minMarksNumber <= 0) {
      this.resetStudents();
      return;
    }
  
    this.students = this.students.filter(student => student.totalMarks > minMarksNumber);
  }
  
  
  }
  resetStudents() {
    this.students= [
      new Student("Mathew", 25, "Computer Science", 85),
      new Student("Akash", 21, "Electrical Engineering", 78),
      new Student("Amina", 19, "Mechanical Engineering", 92),
      new Student("Shesa", 22, "Chemistry", 105),
      new Student("Ava", 20, "Physics", 88),
      new Student("Michael", 21, "Mathematics", 81),
      new Student("Emma", 19, "Biology", 79),
      new Student("James", 22, "Civil Engineering", 84),
      new Student("Olivia", 20, "Environmental Science", 87),
      new Student("William", 21, "Astronomy", 90)
  ];
  }

}
class Student {
  [key: string]: any;
  constructor(
    public name: string,
    public age: number,
    public department: string,
    public totalMarks: number
  ) {}
}