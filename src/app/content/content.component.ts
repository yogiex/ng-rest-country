import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { NegaraService } from "../negara.service";
//import { do } from 'rxjs/operators';
//import 'rxjs/add/operator/do';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  Negara: any = [];
  constructor(public api: NegaraService) { }
  
  ngOnInit(): void {
    this.loadDatas()
  }
  loadDatas(){
    return this.api.getAllDatas()
    .subscribe((data: {}) => {
      this.Negara = data
      console.log(this.Negara[1])
    })
  }



}
