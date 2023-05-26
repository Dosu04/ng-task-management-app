import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  taskArray = [{taskName: 'Read through Angular docs ', isDone: false}]

  onSubmit(form: NgForm){
    
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isDone: false
    })

    form.reset();
  }

  onDelete(index: number){
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number){
    this.taskArray[index].isDone = !this.taskArray[index].isDone;
  }

}
