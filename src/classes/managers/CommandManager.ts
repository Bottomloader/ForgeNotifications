import { BaseCommandManager } from '@tryforge/forgescript'
import type { Events } from 'youtubei'


export const handlerName = "ForgeNotifications"

export class YoutubeManager extends BaseCommandManager<keyof Events> {
     handlerName = 'YTCommands'
}
