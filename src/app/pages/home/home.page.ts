import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { InputService } from 'src/app/services/input.service';
import { Message } from 'src/app/modules/message.models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  messages!: Message[];
  constructor(private router:Router, private input: InputService) {
    this.messages = [];
  }
  user!: any;

  message!: string;
  
  goInput(){
    this.router.navigate(['/'])
  }
  
  sendMessage(){
    let message = new Message(this.user.name,this.user.lastname,this.message,new Date())
    this.messages.push(message)
    this.cleanMessage();
  }
  
  ngOnInit(){
    this.user = this.input.getInfo();
  }

  cleanMessage(){
    this.message = ""; 
  }

}

