// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-datatable',
//   templateUrl: './datatable.component.html',
//   styleUrls: ['./datatable.component.css']
// })
// export class DatatableComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

// import { MessageService } from './services/index';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
    constructor(private messageService: MessageService) { }
    listData: any = {};

    sendMessage(): void {

      this.listData = 
        {
        'id': 3,
        'fname': 'demo3fname',
        'lname': 'demo3lname',
        'email': 'demo3@gmail.com',
        'mobile': '8889211403',
        'address': 'demoaddress3',
      }
    // ],
        // send message to subscribers via observable subject
        this.messageService.sendMessage(this.listData);
    }

    clearMessage(): void {
        // clear message
        this.messageService.clearMessage();
    }
}