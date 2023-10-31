import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Option, Question } from 'src/app/model/questions';
import { DataService } from 'src/app/services/data.service';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  number: number = 0;
  total: number = 0;
  questions?: Array<Question>;
  question?: string;
  options?: Array<Option>

  end: boolean = false;

  answer = new FormControl('');
  // answer = this.formBuilder.control('');
  answers: Array<string> = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private resultService: ResultService,
    // private formBuilder :FormBuilder ,
  ) { }


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
    this.answers.push(this.answer.value || '');
    if (this.total - 1 == this.number) {
      this.end = true;
    }
    this.setQuestion(this.number + 1);
  }

  onSubmit() {
    this.answers.push(this.answer.value || '');
    this.resultService.post(this.answers);
    console.log('answer', this.answers)
    this.router.navigate(["result"]);
  }

}
