import { Component, OnInit, Input } from '@angular/core';
import { DigitalService } from '../digital.service';

@Component({
  selector: 'app-digits',
  templateUrl: './digits.component.html',
  styleUrls: ['./digits.component.css']
})
export class DigitsComponent implements OnInit {
  @Input() digit;
  activate:boolean=false;

  constructor(private digitalservice:DigitalService) { }


  ngOnInit(): void {this.digitalservice.activekey.subscribe(val=>this.checkToActivate(val));
  }

  checkToActivate(valu){
    // console.log('got value' + valu)
    if(valu == this.digit){
      this.activate = true;
      setTimeout(()=>{
        this.activate = false;
      },500);
    };
  }

  enterdidit(){
    this.digitalservice.entered.next(this.digit);
  };
}
