import { Component } from '@angular/core';
import { Task } from './task';
import { compileDeclareFactoryFunction } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadanie codziennie: odkurzanie';
  taskDate = '';
  config: { [key: string]: string } | null = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2023-12-01',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2023-07-11',
      done: true,
    },
    {
      name: 'Sprzątanie mieszkania',
      deadline: '2023-07-10',
      done: false
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString(),
      };
    }, 500);
    this.sortTasks();
  }

  clearTask() {
    this.tasks = [];
  }


  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleteTasks(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }
}
