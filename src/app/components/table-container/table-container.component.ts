import { Session } from './../../shared/models/session';
import { Roll } from './../../shared/models/roll';
import { SessionService } from './../../shared/services/session.service';
import { Component, OnInit } from '@angular/core';
import { RollService } from 'src/app/shared/services/roll.service';
import { CheckoutService } from 'src/app/shared/services/checkout.service';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {
  firstBox =  "C";
  secondBox = "L";
  thirdBox = "O"
  winner = false;
  message = "";
  constructor(
    private rollService: RollService,
    private sessionService: SessionService,
    private checkoutService: CheckoutService) { }

  ngOnInit() {
  }

  rollSlots() {
     this.rollService.rollSlots(this.sessionService.getSesssionId()).subscribe((data: Roll) => {
        this.firstBox = data.boxes[0];
        this.secondBox = data.boxes[1];
        this.thirdBox = data.boxes[2];
        this.sessionService.credits = data.credits;
        this.message = data.result;
        this.winner = data.winner;
     },
     err => {
       this.message = err.error.error;
       this.winner = false;
      }
     );
  }

  checkout() {
      this.checkoutService.checkoutCredits(this.sessionService.getSesssionId())
      .subscribe((data: {session: Session, message: string}) => {
         this.message = data.message;
         this.sessionService.credits = data.session.credits;
         this.sessionService.account = data.session.account;
         this.winner = true;
      },
       err => {
        this.message = err.error.error;
        this.winner = false;
      });
  }

  getCredits() {
    return this.sessionService.credits;
  }

  getAccount() {
    return this.sessionService.account;
  }

}
