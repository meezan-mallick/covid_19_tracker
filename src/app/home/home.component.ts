import { $$ } from '@angular/compiler/src/chars';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataservice : DataService) {
   
   }

  ngOnInit() {
  }

  hello(){
    var name = $("#name").val();
    alert(name);

  }

}