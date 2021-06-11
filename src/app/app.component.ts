import { SessionService } from './shared/services/session.service';
import { Component, OnInit } from '@angular/core';
import { Session } from './shared/models/session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'smartbite-slot-machine';
  constructor(private sessionService: SessionService) {

  }
  ngOnInit() {
      this.sessionService.checkSession(this.sessionService.getSesssionId()).subscribe((data: Session) => {
         this.sessionService.setSessionId(data.id);
         this.sessionService.credits = data.credits;
         this.sessionService.account = data.account;
      });
  }
}
