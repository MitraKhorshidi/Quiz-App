import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import questions from 'src/app/services/data';
import { Question } from '../model/questions';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAllQuestions():Observable<Array<Question>>{
    return new Observable((observer)=>observer.next(questions));
  }
}
