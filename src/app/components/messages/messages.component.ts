import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Message } from 'src/app/modules/message.models';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent  implements OnInit {

  constructor() {}

  messagesChild!: Message[];

  @Input() messages!: Message[];

  ngOnInit() {
    this.messagesChild = this.messages;
    console.log(this.messages)
  }

  deleteMessage(element: number){
    this.messagesChild.splice(element,1)
  }


}
