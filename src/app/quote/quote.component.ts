import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote("Life", "Elizabeth Gilbert", "Embrace the glorious mess that you are.", new  Date('2020/8/2')),
    new Quote("Growth", "Peter Kangura", "Be you.", new Date('2020/4/4')),
    new Quote("Love", "Silvia Kago", "Love is trash",new Date('2020/2/1')),
    new Quote("Health", "Pauline wambui", "Eat healthy",new Date('2020,6/7')),
  ];
 
  upvote(i){
    this.quotes[i].upvotes++
  }
  downvote(i){
    this.quotes[i].downvotes++
  }
  delete(i){
    console.log(i)
    this.quotes.splice(i,1)
  }
  addNewQuote(quote){
    this.quotes.push(quote)
  }
  constructor() { }
 
  ngOnInit() {
  }
  preNum:number
lastNum:number
counter:number
highestUpvote(){
  this.preNum = 0
  this.lastNum = 0

  for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.lastNum = this.quotes[this.counter].upvotes;
    if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  }
  console.log(this.preNum)
  return  this.preNum
}

}