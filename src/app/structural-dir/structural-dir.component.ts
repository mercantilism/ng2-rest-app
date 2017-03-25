import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrls: ['./structural-dir.component.css']
})
export class StructuralDirComponent implements OnInit {
  showPara1 = true;
  showPara2 = false;

  constructor() { }

  ngOnInit() {
  }

}
