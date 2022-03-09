import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async submit(){
    const res = await axios.post("http://localhost:3000/",{
      id : document.getElementsByTagName("input")[0].value,
      cusName : document.getElementsByTagName("input")[1].value,
      pic : document.getElementsByTagName("input")[2].value,
      city : document.getElementsByTagName("input")[3].value,
      remark : document.getElementsByTagName("input")[4].value,
      npwp : document.getElementsByTagName("input")[5].value,
      price : document.getElementsByTagName("input")[6].value,
      address : document.getElementsByTagName("input")[7].value,
      address2 : document.getElementsByTagName("input")[8].value,
      contact : document.getElementsByTagName("input")[9].value,
      region : document.getElementsByTagName("input")[10].value,
      province : document.getElementsByTagName("input")[11].value,
      kuota : document.getElementsByTagName("input")[12].value,
      Expedition : document.getElementsByTagName("input")[13].value, 
    });
  }
}
