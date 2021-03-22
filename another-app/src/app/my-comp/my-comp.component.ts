import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  // test 2 - Tutorial 5 bindClass
  // myVar="myClass";
  // isStyleActive: boolean = true;
  // isSpecialActive:boolean = true;
  // isColorActive: boolean = true;
  // isFontActive: boolean = true;

  // styleCheck={
    // specialClass: this.isSpecialActive,
    // colorClass: this.isColorActive,
    // fontClass: this.isFontActive,
  // }

  // test 3 - Tutorial 6 Style Binding - ngStyle
  // ifColor: boolean = false;
  // ifFont: boolean = true;
  // myStyle={
  //   'background-color':'yellow',
    //// 'color': 'pink',
    // 'font-size.px': 80,
    // 'font-weight':'bold',
    // 'color': this.ifColor ? 'red' : 'blue'
  // }

    // Test 4 event Binding
    // myText: string = "This is my text.";
  
  constructor() { }
  // test 1
  myString: string = "a first string sample";
  myNumber: number = 10;
  myImage: string = "https://api.time.com/wp-content/uploads/2015/02/cats.jpg?quality=85&w=1024&h=512&crop=1";

  myJSON = {
    catName: "Snowball",
    catId:  927
  };

  myId: string ="Hello";
  inputDisabled: boolean =true;
  myValue: string ="Hello my dear cat:)";

  myFunc(): void{
    this.myJSON.catName = "Xueqiu";
  }

  // Test 4
  // changeText() {
  //   this.myText = "This is a new text.";
  // }
  // changeEvent
  ngOnInit(): void {
  }
}

