import { Component, OnInit, Input } from '@angular/core';
import { zippyAnimation } from '../animations/zippy-animation';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [zippyAnimation]
})
export class ZippyComponent implements OnInit {
  @Input('title') title: string;

  isExpanded: boolean;

  constructor() {}

  accordianAction() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {}
}
