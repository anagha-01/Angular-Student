import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  onSubmit(data:NgForm){
    console.log(data.value)
  }
  constructor() { }

  ngOnInit() {
  }

}
