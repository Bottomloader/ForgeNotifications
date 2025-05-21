import { BaseCommandManager } from '@tryforge/forgescript'
//import type { Events } from 'youtubei'


export const handlerName = "ForgeNotifications"

// commented out this verion to get tests running, no `Events` in 'youtubei'
// export class YoutubeManager extends BaseCommandManager<keyof Events> {
//      handlerName = 'YTCommands'
// }
export class YoutubeManager extends BaseCommandManager<any> {
     handlerName = 'YTCommands'
}
