import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/model/questions';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result?: Result ;

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.resultService.getResult().subscribe(
      (next) => this.result = next
    )
  }

}
