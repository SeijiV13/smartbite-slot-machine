import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slot-item',
  templateUrl: './slot-item.component.html',
  styleUrls: ['./slot-item.component.scss']
})
export class SlotItemComponent implements OnInit {
  @Input() letter: string = "";
  constructor() { }

  ngOnInit() {
  }

}
