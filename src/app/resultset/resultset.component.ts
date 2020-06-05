import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultset',
  templateUrl: './resultset.component.html',
  styleUrls: ['./resultset.component.css']
})
export class ResultsetComponent implements OnInit {
@Input() oneR:string = '';
@Input() countn:string = '';



  constructor() { }

  ngOnInit(): void {
  }

}
