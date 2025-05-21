import { EventManager, ForgeClient, ForgeExtension, FunctionManager } from '@tryforge/forgescript'
import { YoutubeManager as CommandManager } from '../managers/CommandManager'
import { join } from 'path'
import fs from 'fs'

export interface YtConfig {
  interval: number
  events: string
}

export class ForgeNotifications extends ForgeExtension {
    name = 'forge.notifications'
    description = ''
    version = '1.0.0'
    commands!: any
    
    constructor(public options: YtConfig) {
      super()
      const value = options?.interval ?? 300000
      fs.mkdirSync("forgeNotificationsDB");
      if (fs.existsSync('forgeNotificationsDB/youtube.json')) {
        const dataBase = JSON.parse(fs.readFileSync('/forgeNotificationsDB/youtube.json', 'utf-8'))
        dataBase.interval = value
        fs.writeFileSync('forgeNotificationsDB/youtube.json', JSON.stringify(dataBase, null, 2))
      } else {
        const dataBase = { interval: value }
        fs.writeFileSync('forgeNotificationsDB/youtube.json', JSON.stringify(dataBase, null, 2))
      }
    }

    public init(client: ForgeClient): void {
      this.commands = new CommandManager(client);
      EventManager.load('ForgeNotificationsEvents', __dirname + '/../../events')
      this.load(join(__dirname, '../../functions'));
      if (this.options?.events?.length)
        client.events.load("ForgeDBEvents", this.options.events)
      }
    }
