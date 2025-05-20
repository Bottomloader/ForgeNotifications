// import { BaseEventHandler, ForgeClient } from '@tryforge/forgescript'
// import { ForgeNotifs } from '@structures/ForgeNotifs'

// type EventNames = 
//   | 'videoUpload'
//   | 'liveStart'
//   ;
    
// export class YTHandler<T extends INotificationsEvents = INotificationsEvents> extends BaseEventHandler<any, T> {
//     register(client: ForgeClient): void {
//         const forgeLink = client.getExtension(ForgeNotifs, true);
//         if (forgeNotifs.event path) {
//             forgeNotifs.event path.on(this.name as any, (...args: any[]) => {
//                 this.listener.apply(client, args);
//             });
//         } else { 
//             console.warn(`[ForgeNotifs] Attempted to register event "${this.name}" but Event Manager is not initialized.`);
//         }
//     }
// }