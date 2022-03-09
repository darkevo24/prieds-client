import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
  constructor() { 
  }
  data =[];
  ngOnInit(): void {
    axios.get("http://localhost:3000/read").then(function(res){
      this.data = res.data;
      console.log(this.data);
    })
  }
}
