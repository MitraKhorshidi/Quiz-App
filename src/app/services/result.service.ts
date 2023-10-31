import { Injectable } from '@angular/core';


const CORRECT_ANSWERS = [
  'Hyper Text Markup Language',
  '<h1>',
  '<br>',
  '<div style="background-color:yellow;>',
  '<strong',
  '/',
  '<a href="url" new',
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

  getresult():number{
    let correctsNum: number = 0;
    for (let i = 0; i < this.answers.length; i++) {
      if (this.answers[i] === CORRECT_ANSWERS[i]) {
        correctsNum += 1;
      }
    }
    return(correctsNum);
  }

}
