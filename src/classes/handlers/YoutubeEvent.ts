import { BaseEventHandler, ForgeClient } from '@tryforge/forgescript'
import { ForgeNotifications } from '../structures/ForgeNotifications'

type EventNames = 
   | 'ytNewVideo'
   ;
    
export class YoutubeEvents extends BaseEventHandler<any> {
     register(client: ForgeClient): void {
         client.getExtension(ForgeNotifications, true)
     }
 }
