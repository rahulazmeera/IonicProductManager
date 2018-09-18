import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatSupportPage } from './chat-support';

@NgModule({
  declarations: [
    ChatSupportPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatSupportPage),
  ],
})
export class ChatSupportPageModule {}
