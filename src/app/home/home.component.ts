import { Component, OnInit } from '@angular/core';
import { DigitalService } from '../digital.service';
import { HttpClient } from '@angular/common/http';
import { Resp } from '../resp';
import { strict } from 'assert';

interface postb{
  sequential:boolean;
  sequence:string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  digits:string[] = ['1','2','3','4','5','6','7','8','9','0','.','+','-','*','/',"Įvęsti"];
  inputValue:string = '';
  prevInputs:string[]=[];
  rezultatas:string = '';
  gauta:boolean = false;
  countTimes:number=0;
  counterS:string[]=[];
  ps:string = '';
  post:postb;
  postbody = function(gauta,eilute) {
    this.sequential = gauta;
    this.sequence = eilute;
  };


  constructor(private digitalservice:DigitalService,private http:HttpClient) { }

  ngOnInit(): void {
    this.digitalservice.entered.subscribe(val=>this.inputValue=this.inputValue+val)
  }

  onSubmit(){
    this.post= new this.postbody(false,this.inputValue)
    
    this.ps = 'http://localhost:8080/calculator/' + this.digitalservice.session
    // console.log(this.ps)
    this.http.post(this.ps,this.post)
    .subscribe((response:Resp)=>{
      this.digitalservice.session = response.session;
      this.gauta=true;
      this.countTimes = this.countTimes + 1;
      this.rezultatas = ''+response.rezult;
      this.counterS.push('Skaičiavimas : ' + this.countTimes);
      this.prevInputs.push(this.post.sequence+'='+this.rezultatas)
    })
    this.inputValue = '';
  }

  onKey(event){
    // const key =  (<HTMLInputElement>event.target).value.substr(-0);
    // const key =  this.inputValue.substr(-1);
    const key = event.key;
    const regex = '^[0-9]+$'
    // console.log(key);
    if (key.match(regex)){
      this.digitalservice.activekey.next(key);
    }
    
  }

  counter(index:number){
        return 'Skaičiavimas : ' + (index + 1);

  }
}



