import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigitalService {
 entered = new Subject<string>();
 session:number=0;
 activekey = new Subject<string>();

  constructor() { }
}
