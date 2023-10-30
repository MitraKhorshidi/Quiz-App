import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Option, Question } from 'src/app/model/questions';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  number: number = 0;
  total?: number;
  questions?: Array<Question>;
  question?: string;
  options?: Array<Option>

  end : boolean = false;


  constructor(private dataService: DataService ,private formBuilder :FormBuilder) { }


  ngOnInit(): void {
    this.dataService.getAllQuestions().subscribe(
      (next: Array<Question>) => {
        this.questions = next;
        this.total = next.length;
        this.setQuestion(1);
      }
    );
  }

  setQuestion(number: number): void {
    this.number = number;
    const object = this.questions?.find((obj) => obj.number === number);
    this.question = object?.question;
    this.options = object?.options;
  }
  onNext(): void {
   
    this.number += 1;
    this.setQuestion(this.number);
    console.log('num',this.number, this.question);
  }

  onSubmit(){}

}
