
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
  message: any;
  subscription: Subscription;
  listData: any = [];
  constructor(private messageService: MessageService) {

    this.listData = [
      {
        'id': 1,
        'fname': 'demo1fname',
        'lname': 'demo1lname',
        'email': 'demo1@gmail.com',
        'mobile': '8889211406',
        'address': 'demoaddress1',
      },
      {
        'id': 2,
        'fname': 'demo2fname',
        'lname': 'demo2lname',
        'email': 'demo1@gmail.com',
        'mobile': '8889211407',
        'address': 'demoaddress7',
      },
    ];

    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
    this.message = message;
      this.listData.push(this.message.text);
    });

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
