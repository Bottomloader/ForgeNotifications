import { BaseEventHandler, ForgeClient } from '@tryforge/forgescript'
import { ForgeNotifications } from '../structures/ForgeNotifications'

type EventNames = 
   | 'videoUpload'
   | 'liveStart'
   ;
    
export class YoutubeEvent<T extends INotificationsEvents = INotificationsEvents> extends BaseEventHandler<any, T> {
     register(client: ForgeClient): void {
         const forgeNotifs = client.getExtension(ForgeNotifications, true);
         if (forgeNotifs.event.path) {
             forgeNotifs.event.path.on(this.name as any, (...args: any[]) => {
                 this.listener.apply(client, args);
             });
         } else { 
             console.warn(`[ForgeNotifications] Attempted to register event "${this.name}" but Event Manager is not initialized.`);
         }
     }
 }
