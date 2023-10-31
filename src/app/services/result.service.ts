import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../model/questions';


const CORRECT_ANSWERS = [
  'Hyper Text Markup Language',
  '<h1>',
  '<br>',
  '<div style="background-color:yellow;>',
  '<strong>',
  '/',
  '<a href="url" target="_balnk"',
  '<ol>',
  '<input type="checkbox"/>',
  '<video>'
]
@Injectable({
  providedIn: 'root'
})
export class ResultService {

  answers: Array<string> = [];

  constructor() { }

  post(answers: Array<string>) {
    this.answers = answers;

  }

  getResult(): Observable<Result> {
    let correctsNum: number = 0;
    for (let i = 0; i < this.answers.length; i++) {
      if (this.answers[i] === CORRECT_ANSWERS[i]) {
        correctsNum += 1;
      }
    }
    return new Observable((observer) => observer.next({
      correctsNum: correctsNum,
      totalNum: this.answers.length,
      grade: correctsNum / this.answers.length * 100
    }));

  }

}
