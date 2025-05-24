import { BaseEventHandler, ForgeClient } from '@tryforge/forgescript'
import { ForgeNotifications } from '../structures/ForgeNotifications'
import { Record } from '../../util';

/* Agg is so big 
mmmfffggghhh */

export interface EventData = {
  ytNewVideo: [{
    data: Record || null;
  }]
}
    
export class YoutubeEvents extends BaseEventHandler<any> {
     register(client: ForgeClient): void {
        client.getExtension(ForgeNotifications, true)['emitter'].on(this.name, this.listener.bind(client))
     }
 }
